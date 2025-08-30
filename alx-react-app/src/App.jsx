import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task 3: User Profile</h1>
      <UserProfile 
        name="Andrew Mungai" 
        age={28} 
        bio="I am a passionate developer and lifelong learner." 
      />
      <UserProfile 
        name="Jane Doe" 
        age={25} 
        bio="Frontend enthusiast with a love for design and UX." 
      />
    </div>
  );
}

export default App;
