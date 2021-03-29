import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
        <Hero/>
      <Submenu/>
    </div>
  );
}

export default App;
