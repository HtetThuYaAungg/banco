import React,{useState} from 'react'
import InvoiceForm from './InvoiceForm'
import InvoiceList from './InvoiceList'

const Invoice = () => {

    const [items,setItem] = useState([
        {
            id : 1,
            name : "Apple",
            price : 200
        },
        {
            id : 2,
            name : "Banana",
            price : 500
        },
        {
            id : 3,
            name : "Orange",
            price : 300
        },
        {
            id : 4,
            name : "Mango",
            price : 200
        }
    ]);

    const [lists,setList] = useState([

    ]);

    const addList = (id,quantity) =>{

        const currentItem = items.find(item=>item.id ==  id);
        const isExitinList = lists.find(list => list.item.id === currentItem.id);

        if(isExitinList){
            setList(lists.map(list => {
                if(list.item.id === currentItem.id){
                    list.quantity += quantity;
                    list.cost = currentItem.price * list.quantity;
                }
                return list;
            })) 
        }else{
            const newList = {
                id: Date.now(),
                item : currentItem,
                quantity,
                cost : currentItem.price * quantity
            };
            setList([...lists,newList]);
        }
        
    };

    const increaseList = (id) => {
        setList(lists.map(list=>{
            if(list.id === id){
                list.quantity += 1;
                list.cost = list.item.price * list.quantity;
            }
            return list;
        }))
        console.log(id);
    }

    const decreaseList = (id) => {
        setList(lists.map(list=>{
            if(list.id === id && list.quantity > 1){
                list.quantity -= 1;
                list.cost = list.item.price * list.quantity;
            }
            return list;
        }))
        console.log(id);
    }

    // const increaseQty = (id,idIncr) => {
    //     setList(lists.map(list => {
    //         if(list.id === id ){
    //             list.quantity += 1;
    //             list.cost = list.item.price * list.quantity;
    //         }else(list.id === id && list.quantity > 1)
    //             list.quantity -= 1;
    //             list.cost = list.item.price * list.quantity;
            
    //         return list;
    //     }))
    //     console.log(id);
    // }
    // console.log(lists);

  return (
    <>
    
    <div className=''>
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h3 className='mt-5 mb-3'>Invoice Text</h3>
                <InvoiceForm items = {items} addList={addList} />
                <InvoiceList lists={lists}  increaseList={increaseList} decreaseList={decreaseList}/>
            </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Invoice