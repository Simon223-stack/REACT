import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [form,setForm] = useState({firstName:'',lastName:'',phone:'',email:'',password:'',confirm:''});
  const [error,setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    setError('');
    if(form.password !== form.confirm){
      setError('Passwords do not match');
      return;
    }
    if(!form.email || !form.password){
      setError('Email and password required');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if(users.find(u=>u.email === form.email)){
      setError('User with that email already exists');
      return;
    }

    const newUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      password: form.password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // auto-login
    localStorage.setItem('loggedInUser', JSON.stringify({email:newUser.email,firstName:newUser.firstName}));
    navigate('/products');
  }

  return (
    <div className="container">
      <div className="card" style={{maxWidth:640,margin:'0 auto'}}>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} style={{display:'grid',gap:8}}>
          <div className="form-row">
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="input" />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="input" />
          </div>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="input" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
          <div className="form-row">
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="input" />
            <input name="confirm" type="password" value={form.confirm} onChange={handleChange} placeholder="Confirm password" className="input" />
          </div>
          {error && <div style={{color:'crimson'}}>{error}</div>}
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button className="btn" type="submit">Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
}