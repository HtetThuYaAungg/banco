import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';

const Product = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get("http://localhost:3000/products");
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div className=" container-fluid">
          <div className='flex flex-wrap gap-5 my-5 justify-content-center'>
              {products.map((product) => 
                  <Card key={product.id} product={product} />
             )}
      </div>
    </div>
  )
}

export default Product
