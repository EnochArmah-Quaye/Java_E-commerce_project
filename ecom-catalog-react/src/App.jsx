import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductsList from './ProductsList'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
     .then(response => response.json())
     .then(data => setProducts(data));
  }, []);

  return (
    
      <div className='container'>
        <div>
          {products.length ? (<ProductsList products={products}/>) : (<p>No products found</p>)}
        </div>
      </div>
    
  )
}

export default App
