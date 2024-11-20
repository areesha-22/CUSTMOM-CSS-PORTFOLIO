import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import Link from "next/link"
const Contact = () => {
  return (
    
     
     <div className="contact-container">
       <h1 className="contact" id="contact">CONTACT ME</h1>
      <br></br><p className="p1">Have You Any Question?</p>
      
      
   <ul className="contact-info">
    <Link href="https://github.com/areesha-22"><li><FaGithub /></li></Link>
    <Link href="/"> <li><MdEmail /></li></Link>
    <Link href="https://www.linkedin.com/in/areesha-abdul-raheem-0aaba0223/"> <li><FaLinkedin /></li></Link>
   </ul>
     <p className="p3">SEND ME AN EMAIL</p>
     <div className="row">
     <div className="form-items">
        
        <div className="form-group">
            <input id="name" placeholder="NAME" className="form-control"/>
        </div>
</div>
<div className="form-items">
    <div className="form-group">
        <input id="EMAIL" placeholder="EMAIL" type="email" className="form-control"/>
    </div>
</div>
<div className="form-items">
    <div className="form-group">
        <input id="SUBJECT" placeholder="SUBJECT" className="form-control"/>
    </div>
</div>
<div className="form-items">
    <div className="form-group">
        <textarea  placeholder="MESSAGE" className="form-control"></textarea>
    </div>
</div>
<div className="form-items">
   
     <button type="submit" className="submit">SEND MESSAGE</button>
    </div>
</div>
       

   </div>


  )
}

export default Contact
