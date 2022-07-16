import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  filterDogsbyName,
  filterDogsbyTemperament,
  filterDogsbyWeight,
  filterCreatedOrApi
} from "../actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Paginado } from "./Paginado";
import SearchBar from "./SearchBar";
import About from "./imagenes/about.png";
import Create from "./imagenes/dogCreate.png";
import prev from "./imagenes/prev.png";
import next from "./imagenes/next.png";
import Like from "./imagenes/like.png";
import load from './imagenes/loading.gif'
import style from "./Style/Home.module.css";
import MobileHeader from "./MobileHeader";
import "./Style/MobileHeader.css";


export default function Home() {
  const dispatch = useDispatch()
  const allDogs = useSelector((state) => state.dogs);
  //paginado
  const allTemperaments = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8//cantidad de cartas por pagina va a mostrar
  const indexOfLastDog = currentPage * dogsPerPage; //8 cartas por pagina
  const indexOfFirstDog = indexOfLastDog - dogsPerPage; //0
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const [order, setOrder] = useState("")

  const paginado = (pageNumber) => {
    //funcion que me permite cambiar de pagina
    setCurrentPage(pageNumber); // y que me muestre las cartas correspondientes a la pagina que seleccione el usuario
  };

  useEffect(() => {
    //cuando se cargue la pagina se ejecuta el dispatch para traer los datos de la api y guardarlos en el store
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
    setCurrentPage(1);
  }

  function handleFilterTemperament(e) {
    //filtra por temperamento
    e.preventDefault();
    dispatch(filterDogsbyTemperament(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterWeight(e) {
    //filtra por peso
    e.preventDefault();
    dispatch(filterDogsbyWeight(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterCreatedOrApi(e) {
    //filtro por si fue creado o por api
    e.preventDefault(); //preventDefault para que no se recargue la pagina al hacer click en el boton
    dispatch(filterCreatedOrApi(e.target.value)); //e.target.value para que me muestre los datos de la api o los creados por el usuario
    setCurrentPage(1); //para que no se quede en la pagina anterior
    setOrder(e.target.value); //setOrder es para que no se repita el filtro
  }

  function handleFilterForName(e) {
    //esta funcion filtra por nombre
    
    dispatch(filterDogsbyName(e.target.value)); //e.target.value para que me muestre los datos de la api o los creados por el usuario
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div className={style.home}>
      <div className="headerDesk">
        <nav>
          <button
            className={style.logo}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Console.Dog() 🐾
          </button>

          <div>
            <SearchBar />
          </div>
         
          <Link to="/favorites">
            
            <button className={style.btn}>
              
              <img
                src={Like}
                weight="10px"
                height="40px"
                title="FAVOURITES"
                alt="favorite"
              />
            </button>
          </Link>

          <Link to="/about">
            
            <button className={style.aboutBtn}>
              <img
                src={About}
                weight="40px"
                height="40px"
                title="ABOUT"
                alt="about"
              />
            </button>
          </Link>
          
          <div className={style.create}>
            <Link to="/dogs">
              <img
                src={Create}
                weight="30px"
                height="28px"
                title="CREATE DOG"
                alt="create"
              />
            </Link>
          </div>

          <button
            className={style.boton}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            🏠
          </button>
        </nav>
      </div>
      <MobileHeader />

      <div>
        <section className={style.filters}>
          <select
            value="disabled"
            className={style.select}
            onChange={(e) => handleFilterForName(e)}
          >
            <option value="">Name</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>

          <select
            value="disabled"
            className={style.select}
            onChange={(e) => handleFilterWeight(e)}
          >
            <option value="weightMax">Weight</option>
            <option value="weightMax">Weight Max</option>
            <option value="weightMin">Weight Min</option>
          </select>

          <select
            value="disabled"
            className={style.select}
            onChange={(e) => handleFilterTemperament(e)}
          >
            <option value="temperament">Temperament</option>
            {allTemperaments.map((element) => (
              <option value={element.name} key={element.id}>
                {element.name}
              </option>
            ))}
          </select>

          <select
            className={style.select}
            onChange={(e) => handleFilterCreatedOrApi(e)}
          >
            <option value="all">Origin</option>
            <option value="createdAt">Created</option>
            <option value="Api">Existing</option>
          </select>
        </section>

        <div>
          <button
            onClick={() =>
              paginado(currentPage === 1 ? currentPage : currentPage - 1)
            }
            className={style.prev}
          >
            {" "}
            <img src={prev} alt="previous" />
          </button>
          <button
            onClick={() =>
              paginado(currentPage === 23 ? currentPage : currentPage + 1)
            }
            className={style.next}
          >
            {" "}
            <img src={next} alt="NEXT" />
          </button>
        </div>

        <div className={style.container}>
        {currentDogs.length === 0 ?
        <div className={style.loading}><img className={style.imgload} src={load} alt="LOADING" /></div>
        :
          currentDogs.map((dog) => {
            return (
              <div key={dog.id}>
                <Card
                  name={dog.name}
                  image={dog.img ? dog.img : dog.image}
                  key={dog.id}
                  id={dog.id}
                  weightMax={dog.weightMax}
                  temperament={dog.temperament}
                  weightMin={dog.weightMin}
                  api={dog.Api}
                />
              </div>
            );
          })
        }
        
        </div>
        <div className={style.paginado}>
          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
        </div>
        
      </div>
      
    </div>
    
  );
}