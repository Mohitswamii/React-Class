
// import React from 'react';

// Front Component
const Front = () => {
  return (
    <div>
      <h1>Frontend</h1>
    </div>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div>
      <h1>This is hero section</h1>
      <button>Click Here!</button>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <div>
      <h1>This is footer</h1>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <>
      <h1>Mohit Swami</h1>

      <Front />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
