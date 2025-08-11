import React from 'react';
export default function ProductCard({p}){
  return (
    <div className="card">
      <img src={p.img} alt={p.name} className="product-img" />
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h4 style={{margin:0}}>{p.name}</h4>
        <div style={{fontWeight:700}}>${p.price.toFixed(2)}</div>
      </div>
      <div className="small">{p.category}</div>
      <p style={{marginTop:8,fontSize:14,color:'#136debff'}}>{p.description}</p>
    </div>
  );
}