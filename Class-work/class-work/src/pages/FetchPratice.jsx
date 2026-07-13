import { useEffect, useState } from 'react';

const FetchPractice = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/posts?_limit=9"; // Limited to 9 for a perfect 3x3 grid

  async function fetchPosts() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) throw new Error("Failed to fetch posts. Please try again later.");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Explore Latest Posts</h1>
        <p style={styles.subtitle}>A clean, asynchronous data fetching display practicing React state management.</p>
      </header>

      {/* 1. Loading State UI */}
      {loading && (
        <div style={styles.centerState}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Fetching data from API...</p>
        </div>
      )}

      {/* 2. Error State UI */}
      {error && (
        <div style={styles.centerState}>
          <div style={styles.errorCard}>
            <strong style={styles.errorTitle}>Error Encountered</strong>
            <p style={styles.errorText}>{error}</p>
            <button onClick={fetchPosts} style={styles.retryButton}>Try Again</button>
          </div>
        </div>
      )}

      {/* 3. Success State (Data Grid) */}
      {!loading && !error && (
        <div style={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} style={styles.card}>
              <div style={styles.badge}>Post #{post.id}</div>
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.cardBody}>{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

// 4. Clean, maintainable UI architecture via a JS style object
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#111827',
    fontWeight: '700',
    marginBottom: '10px',
    letterSpacing: '-0.025em',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#4b5563',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: '10px',
    lineHeight: '1.4',
    textTransform: 'capitalize',
  },
  cardBody: {
    fontSize: '0.95rem',
    color: '#4b5563',
    lineHeight: '1.6',
    flexGrow: 1,
  },
  centerState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 0',
  },
  loadingText: {
    color: '#4b5563',
    marginTop: '16px',
    fontWeight: '500',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  errorCard: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fee2e2',
    padding: '24px',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '400px',
  },
  errorTitle: {
    color: '#991b1b',
    fontSize: '1.1rem',
    display: 'block',
    marginBottom: '8px',
  },
  errorText: {
    color: '#b91c1c',
    fontSize: '0.95rem',
    marginBottom: '16px',
  },
  retryButton: {
    backgroundColor: '#dc2626',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
  }
};

export default FetchPractice;