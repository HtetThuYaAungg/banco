import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {

    
    const link = useLocation().state.link;

  return (
      <>
          <div>{link.title}</div>
      </>
      
  )
}

export default Details