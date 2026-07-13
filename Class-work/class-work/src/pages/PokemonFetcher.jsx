import { useState, useEffect } from 'react';

const PokemonFetcher = () => {
  // Input tracking state
  const [pokemonName, setPokemonName] = useState('');
  // API trigger state
  const [searchQuery, setSearchQuery] = useState('pikachu'); // Default to pikachu on load
  
  // Data and UI states
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prevent fetching if the search query is blank
    if (!searchQuery.trim()) return;

    async function fetchPokemon() {
      try {
        setLoading(true);
        setError(null);
        setPokemonData(null);

        // Convert query to lowercase because PokeAPI expects lowercase names
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase().trim()}`);
        
        if (!res.ok) {
          throw new Error('Pokémon not found. Check your spelling!');
        }

        const data = await res.json();
        
        // Extracting only the data we need: Name, Types, and Height
        const extractedData = {
          name: data.name,
          height: data.height / 10, // Converting decimeters to meters
          types: data.types.map(t => t.type.name).join(', '),
          sprite: data.sprites.front_default // Adding an optional fun sprite!
        };

        setPokemonData(extractedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [searchQuery]); // useEffect runs every time searchQuery changes

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(pokemonName);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Poké-Finder</h2>
      
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter Pokémon name (e.g., ditto)"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      {/* Loading State */}
      {loading && <p style={styles.infoText}>Catching that Pokémon...</p>}

      {/* Error State */}
      {error && <p style={styles.errorText}>{error}</p>}

      {/* Pokémon Display Card */}
      {pokemonData && !loading && !error && (
        <div style={styles.card}>
          {pokemonData.sprite && (
            <img src={pokemonData.sprite} alt={pokemonData.name} style={styles.sprite} />
          )}
          <h3 style={styles.pokemonName}>{pokemonData.name}</h3>
          
          <div style={styles.infoRow}>
            <strong>Type(s):</strong> <span style={styles.value}>{pokemonData.types}</span>
          </div>
          <div style={styles.infoRow}>
            <strong>Height:</strong> <span style={styles.value}>{pokemonData.height} m</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple, modern styling
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  title: {
    color: '#ef4444',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  card: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f8fafc'
  },
  sprite: {
    width: '120px',
    height: '120px',
    margin: '0 auto'
  },
  pokemonName: {
    textTransform: 'capitalize',
    fontSize: '1.5rem',
    margin: '10px 0',
    color: '#1e293b'
  },
  infoRow: {
    margin: '8px 0',
    fontSize: '1.1rem',
    color: '#475569'
  },
  value: {
    textTransform: 'capitalize',
    color: '#0f172a'
  },
  infoText: {
    color: '#64748b'
  },
  errorText: {
    color: '#dc2626',
    fontWeight: 'bold'
  }
};

export default PokemonFetcher;