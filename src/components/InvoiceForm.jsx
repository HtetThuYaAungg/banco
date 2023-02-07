import React, { useRef } from 'react'

const InvoiceForm = ({items,addList}) => {

    const formRef = useRef();
    const handleSubmit = event => {
        event.preventDefault();
       const formData = new FormData(formRef.current);
       addList(formData.get('item_id'),parseInt(formData.get('quantity')))
       formRef.current.reset()
    }

  return (
    <div className="border rounded p-3">
        <form id='create' ref={formRef} onSubmit={handleSubmit}></form>
           <div className='row g-3'>
        <div className="col-12 col-md-4">
            <label htmlFor="" className='form-label'>Select Items</label>
            <select name="item_id" id="" form='create' className='form-select'>
             { items.map((item)=>(
             <option key={item.id} value={item.id}>{item.name}</option>
             ))}
            </select>
        </div>
        <div className="col-12 col-md-4">
            <label htmlFor="" className='form-label' >Quantity</label>
            <input type="number" min='1' form='create' name='quantity' className='form-control' required/>
        </div>
        <div className="col-12 col-md-4">
            <button className="btn btn-lg w-100 h-100 btn-primary" form='create'>Add Item</button>
        </div>
    </div>
    </div>
  )
}

export default InvoiceForm