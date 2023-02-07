import React,{useState} from 'react'

import NavBar from './NavBar'
import productList from './../data';
import ProductCard from './ProductCard';

const Shop = () => {

    const [products, setProduct] = useState(productList);

    const [cart, setCart] = useState([]);

    
    const addToCart = (id) => { 
        const currentProduct = products.find(product => product.id === id);
        const newItemforCart = {
            id: Date.now(),
            product: currentProduct,
            quantity: 1,
        };
        setCart([...cart, newItemforCart]);
    };

    const increase = (cartId) => {
        setCart(cart.map(itemInCart => {
            if (itemInCart.id === cartId){
                itemInCart.quantity += 1;
            }
            return itemInCart;
        }))
    }

    const decrease = (cartId) => {
        setCart(cart.map(itemInCart => {
            if (itemInCart.id === cartId && itemInCart.quantity > 1) {
                itemInCart.quantity -= 1;
            }
            return itemInCart;
        }))
    }

    const deleteCart = (cartId) => {
        setCart(cart.filter((itemInCart) => cartId !== itemInCart.id));
    }

  return <div className="">
    <div className="container">
        <div className="row g-3">
            <div className=" col-12">
                  <NavBar increase={increase} decrease={decrease} cart={cart} deleteCart={deleteCart} />
              </div>
              {products.map((product) => (
                  <div key={product.id} className="col-12 col-md-4 col-xl-3">
                      <ProductCard cart={cart} addToCart={addToCart} product={product}/>
                  </div>
            ))}
        </div>
    </div>
    </div>
}

export default Shop

