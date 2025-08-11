import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/products';

function RequireAuth({children}){
  const user = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  if(!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App(){
  return (
    <div className="app">
      <Header />
      <main style={{flex:1}}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          } />
          <Route path="*" element={
            <div className="container">
              <div className="card">
                <h3>Page not found</h3>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
