import React from 'react'
import { Link, Outlet,} from 'react-router-dom'
import NavBar from '../components/NavBar'


const ThirdPage = () => {

    const links = [
        { id: 1, title: 'Link 1' },
        { id: 2, title: 'Link 2' },
        { id: 3, title: 'Link 3' },
        { id:4, title:'Link 4'}
    ]
  return (
      <>
          <NavBar/>
          <div>ThirdPage</div>
        
          {links.map((link) => 
              <div key={link.id}>
                  <h4>{link.title}</h4>
              <Link to={`/third/${link.id}`} state={{link}} >
                    <button>
                    Details
                    </button>
                  </Link>
                
              </div>
              
              
          )}
      </>
  )
}

export default ThirdPage
