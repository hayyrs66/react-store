import { useEffect, useState } from 'react';

const FetchApi = () => {
  const url = "https://fakestoreapi.com/products?limit=5";
  const [products, setProducts] = useState();
  const apiFetch = async () => {
    const response = await fetch(url);
    const jsonRes = await response.json();
    setProducts(jsonRes)
  }
  useEffect(() =>{
    apiFetch()
  }, [])
  
  return (
    <div>
    </div>
  )
}

export default FetchApi
