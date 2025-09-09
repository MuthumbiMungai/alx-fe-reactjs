import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task 3: User Profile</h1>
      <UserProfile 
        name="Alice" 
        age={28} 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age={25} 
        bio="Frontend enthusiast with a love for design and UX." 
      />
    </div>
  );
}

export default App;
