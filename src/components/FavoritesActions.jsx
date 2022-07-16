import React  from 'react'
import {addFavorite} from '../actions'
import {useDispatch} from 'react-redux'
import s from './Style/FavoriteAction.module.css'
import Like from './imagenes/heart.png'


function FavoritesActions({id, name, image}) {
const  dispatch = useDispatch()

 function handleClick (e) {
    dispatch(addFavorite({id, name, image}));
    alert("Add to favourites");
  
}
    return (
        <div>
        <button className={s.btn} onClick ={(e) => handleClick(e)}> <img src={Like} alt= "Fav"/> </button>
      </div>
    )
}

export default FavoritesActions




















