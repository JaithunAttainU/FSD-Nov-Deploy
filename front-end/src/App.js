import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='container'>
        <h1>Home Page</h1>
        <Link to='/products'> Go To Products</Link>
      </div>
    </>

  );
}

export default App;
