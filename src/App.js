import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/products'; // Capital "P"
import Login from './pages/Login';
import Signup from './pages/Signup'; // Make sure this file exists

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes as needed */}
          
        </Routes>
        <p>WELCOME TO OUR STORE</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;