import React from 'react'

const Card = ({ product }) => {
    
    const { id, title, description, image, price, category } = product;
  return (
    <div className=' w-46 h-auto border flex flex-col gap-5 p-5 rounded shadow-lg justify-content-between'>
          <img src={image} className=" h-20  mx-auto" alt="" />
          <h1>{title.substring(0,20)}...</h1>
          <p>{description.substring(0,30)}...</p>
          <p>${price}</p>
    </div>
  )
}

export default Card
