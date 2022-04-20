import React, {useState} from 'react'
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
function Navbar () {

  const [sidebar,setSidebar]= useState(false)

  const showSidebar=()=> setSidebar(!sidebar)


  return (
    <>
        <div className='sidebar'>
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu actve" : "nav-menu"}>
          <ul className='nav-menu-items'>
            <li className= "navbar-toggle">
              <Link to="#" className='menu-bars'>
                  <AiOutlineClose/>
              </Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar