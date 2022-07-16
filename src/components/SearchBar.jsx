import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameDogs} from "../actions/index";
import style from './Style/SearchBar.module.css';



export default function SearchBar(){
    const dispatch = useDispatch();
    const [ name, setName] =useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        if(name.length === 0) {
            return alert ("Please write a breed")
        } else if(!name) return alert()
        else{
            dispatch(getNameDogs(name));
            setName("")
           }
          }

    return(
       
        <div className={style.search}>
            <input type= "text" className={style.searchTerm}
            placeholder="Search..."
            value={name}
            autoComplete='off'
            onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
            onChange={(e)=> handleInputChange(e)}
            />
             <button type="submit" className={style.searchButton} 
             onClick={(e)=> handleSubmit(e)}>🔍</button>
           
            
       </div>
      
   ) 
       
          

            
    
}