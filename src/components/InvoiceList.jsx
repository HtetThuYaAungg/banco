import React from 'react'

const InvoiceList = ({lists,increaseList,decreaseList}) => {
  return (
   <>
    {lists.length > 0  && 
       <table className='table'>
       <thead>
         <tr>
           <th>Item</th>
           <th className='text-end'>Price</th>
           <th className='text-end'>Quantity</th>
           <th className='text-end'>Cost</th>
         </tr>
       </thead>
       <tbody> 
         {lists.map((list)=>(
           <tr className='align-middel' key={list.id}>
             <th>{list.item.name}</th>
             <th className='text-end'>{list.item.price}</th>
             <th className='text-end'>
              <button className='btn btn-sm btn-outline-primary' onClick={decreaseList.bind(null,list.id)}>
                <i className='bi bi-dash'></i>
              </button>
                <span className='d-inline-block w-25 b px-2'>{list.quantity}</span>
              <button className='btn btn-sm btn-outline-primary' onClick={increaseList.bind(null,list.id)}>
                <i className='bi bi-plus'></i>
              </button>
              </th>
             <th className='text-end'>{list.cost}</th>
           </tr>
         ))}
       </tbody>
       <tfoot>
         <tr>
           <td className='text-center' colSpan={3}>Total</td>
           <td className='text-end'>
             {lists.reduce((pv,cv) => pv + cv.cost , 0 )}
           </td>
         </tr>
       </tfoot>
     </table>
    }
   </>
  )
}

export default InvoiceList