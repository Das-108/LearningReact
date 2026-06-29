import React from 'react'
import UserCard from './UserCard'


const App = () => {
  return (
    <div id='center'>
      <UserCard 
        name="Alex Morgan" 
        email="alex@example.com"        
      >
        {/* These elements are injected into the 'children' prop */}
        <button className="btn-secondary" onClick={() => console.log('Messaged')}>
          Message
        </button>
        <button className="btn-primary" onClick={() => console.log('Followed')}>
          Follow
        </button>
      </UserCard>
    </div>
  )
}

export default App