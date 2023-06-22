import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    //BEM 
    <div className="app">
      <h1>Hello. It us. Twitter Clone w/ JENNYYYY!!!, Gustavo, and Tracy!🚀</h1>
    
      <Sidebar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
