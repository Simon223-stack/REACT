import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    setError('');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u=>u.email === email && u.password === password);
    if(!user){
      setError('Invalid credentials');
      return;
    }
    localStorage.setItem('loggedInUser', JSON.stringify({email:user.email,firstName:user.firstName}));
    navigate('/products');
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:520,margin:'0 auto'}}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{display:'grid',gap:8}}>
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="input" />
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input" />
          {error && <div style={{color:'crimson'}}>{error}</div>}
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button className="btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}