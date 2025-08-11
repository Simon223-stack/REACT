import React, {useMemo, useState} from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function Products(){
  const [category,setCategory] = useState('All');
  const categories = useMemo(()=>['All',...Array.from(new Set(PRODUCTS.map(p=>p.category)))],[]);
  const filtered = useMemo(()=> PRODUCTS.filter(p=> category==='All' ? true : p.category === category),[category]);

  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <h2>Products</h2>
        <div>
          <label className="small" style={{marginRight:8}}>Filter:</label>
          <select value={category} onChange={e=>setCategory(e.target.value)} className="input">
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="grid">
        {filtered.map(p=> <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}