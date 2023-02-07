import React from 'react'
import CartItem from './CartItem'

const Cart = ({ setOpenCart, cart, increase, decrease,deleteCart }) => {
  
  const total = cart.reduce((pv, cv) => pv + cv.product.price * cv.quantity, 0).toFixed(2);

  return (
    <div className=" w-100 min-vh-100 fixed-top bg-black-05" >
      <div className="row h-100 justify-content-end">
        <div className="col-10 col-md-6 col-lg-4  " style={{width:"350px"}}>
          <div className="min-vh-100  bg-white rounded-3 me-3 p-3 mb-2 position-relative" >
            <h4 className='d-flex justify-content-between'>
              <span> Cart Item
                <span className='ms-2 badge bg-dark'>{cart.length}</span>
              </span>
              <i onClick={(_) => setOpenCart(false)} type="button" className= "bi bi-x-lg "></i>
            </h4>
            <hr/>
            {cart.map((itemInCart) => (
              <CartItem key={itemInCart.id} itemInCart={itemInCart} increase={increase} decrease={decrease} deleteCart={deleteCart} />
            ))}
            <div className=" start-0 position-absolute p-3 d-flex border-top justify-content-between w-100"  >
              <h4>Total</h4>
              <h4>{ total}</h4>
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  )
}

export default Cart