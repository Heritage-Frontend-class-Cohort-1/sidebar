import { useEffect, useState } from 'react'
import axios from 'axios'


const Services = () => {
  const[products, setProducts]= useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      setProducts(res.data)
    })
  }, [])

  return (
    <div>Services
      {products.map((product)=>(
        <div key={product.id}>
          <img src={product.image} width={"150"}  />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Services