import React from 'react';
import linkedIn from './imagenes/LinkedIn.png';
import gitHub from "./imagenes/githun.png";
import s from './Style/About.module.css';
import {Link} from 'react-router-dom';


function About() {
    return (
        
        <div className={s.gral}>
                    <Link to = '/home'><button className={s.link}>Back</button></Link>

            <div className={s.texto}>
                    <h2><span>'console.Dog()'</span>  is the world's largest encyclopedia of dog breeds. <br/>It is characterized by providing the user with the most up-to-date and detailed information on the canine world.<br/>
                    It allows the user:<br/>
                    Filter by temperaments, as well as existing or created breeds.<br/>
                    Sort all dog breeds, or any of the chosen filters, according to alphabetical order or by weight.<br/>
                    Search by breed name.<br/>
                    Save the chosen race in favorites ... and delete it if you have changed your mind!<br/>
                  </h2> 
            </div>

            <div className={s.contacto}>
                 <div className={s.contact}>
                         <a Target="_blank" href="https://github.com/Alek30k"><img src={gitHub} width="80px" height="80px" alt="github" /> </a>
                </div>
                 <div className={s.contact}>
                         <a Target="_blank" href="https://www.linkedin.com/in/alejandro-cabrera-7b13a7177/"><img src={linkedIn} width="80px" height="80px"alt="linkedin"/> </a>
                </div>
            
            </div>
        
        <h2>Cabrera Alejandro</h2>
        
</div>
    )
}

export default About
