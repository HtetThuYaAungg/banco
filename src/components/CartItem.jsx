import React from 'react'

const CartItem = ({ itemInCart,increase,decrease, deleteCart}) => {
    
    const cost = itemInCart.product.price * itemInCart.quantity;
    const del = (id) => deleteCart(id);

    return (
       
        <div className=' border border-dark p-3 mb-3 rounded' >
        <div className='d-flex justify-content-between align-items-center me-1 mb-2' style={{width:"230px"}}>
            <img src={itemInCart.product.image} height={50} alt="" className='me-2'></img>
            <p className='small text-truncate '>{itemInCart.product.title}</p>
        </div>
            <div className='d-flex justify-content-between align-items-center pe-2' style={{width:"250px"}}>
                <span>${cost}</span>
              <div className='input-group' style={{width:"150px"}}>
                    <button onClick={(_) => decrease(itemInCart.id)} className='btn btn-sm btn-outline-dark'>
                      <i className='bi bi-dash'></i>
                  </button>
                  <input type="number"  className='form-control form-control-sm' value={itemInCart.quantity}/>
                    <button onClick={(_) => increase(itemInCart.id)} className='btn btn-sm btn-outline-dark'>
                      <i className='bi bi-plus'></i>
                  </button>
              </div>
                <button onClick={del.bind(null,itemInCart.id)} className='btn btn-sm btn-danger'>
                    <i className='bi bi-trash'></i>
              </button>
          </div>
                </div>
            
  )
}

export default CartItem