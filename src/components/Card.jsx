import React from "react";
import FavoritesActions from './FavoritesActions'
import s from './Style/Card.module.css'
import {Link} from 'react-router-dom'



export default function Card ({image, name , id, temperament, weightMax, weightMin}) {
    
    return (
        <div className={s.cards}>
           
            <Link to={`/home/${id}`}>
            <img src={image} alt=""/>
            <h1>{name}</h1>
            </Link>
            <p>Peso Maximo: {weightMax} kgs.</p>
            <p>Peso Minimo: {weightMin} kgs.</p>
            <p>Temperamento: {temperament}</p>
           
            
           
          

            
                <div className={s.fav}>   
                    <FavoritesActions 
                     id = {id}
                    name = {name}
                    image = {image}
                    />         
                </div>
            


        </div>
        
        
        
    )
    
}
