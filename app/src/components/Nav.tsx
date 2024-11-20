import React from 'react'

const Nav = () => {
  return (
  
    <div className="portfolio-container">
    <nav>
        <div className="name"id='home'><h1>AREESHA </h1></div>
       <ul className="listdata">
                <a href="#home"><li className="font-weight: 600;color: white;">HOME</li></a>
               <a href="#about"> <li className="font-weight: 600;color: white;">ABOUT</li></a>
               <a href="#skills">  <li className="font-weight: 600;color: white;">SKILLS</li></a>
               <a href="#contact"> <li className="font-weight: 600;color: white;">CONTACT US</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
