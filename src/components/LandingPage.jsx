import React from  'react';
import {Link} from 'react-router-dom';
import style from './Style/LandingPage.module.css';

export default function LandingPage(){
    return (
        <div className={style.landingpage}>
            <h1 className={style.textgradient}>Welcome <br />to <br />console.Dog()</h1>
            <Link to="/home">
        <button className={style.btn}>Let´s go!</button>
        </Link>
        </div>

      
    )
}


