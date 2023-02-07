import React from 'react'

function StatusBar({lists}) {
    const total = lists.length;
    const done= lists.filter((list)=>list.isDone === true).length;
    const isShow = total ? "d-flex" : "d-none";
  return (
    <>
     { total ? (
        <div className={`${isShow} justify-content-between align-items-center mb-3`}>
        <p className='fw-bold mb-0'>List Total : ({total})</p>
        <div className='badge bg-info rounded-pill'>Done : {done} </div>
      </div>
     ):(
        <></>
     )}
    </>
  );
}

export default StatusBar