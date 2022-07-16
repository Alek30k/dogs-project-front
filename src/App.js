import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; // es un componente que nos permite conectar el store con el componente
import Home from '../src/components/Home';
import LandingPage from './components/LandingPage';
import DogCreate from "./components/DogCreate";
import Details from './components/Details';
import About from './components/About'
import Favorites from './components/Favorites';


//Siempre envolver el div con el browser router porque si no no funciona porque no se encuentra el componente y no se puede renderizar
function App() {
 

  return (
    <BrowserRouter> 
    <div className="App">
    <Switch>
    <Route path='/' element={<LandingPage />} />
    <Route path='/home' element={<Home />} />  
    <Route path='/dogs'element={<DogCreate />} />
    <Route path='/home/:id' element={<Details />} /> 
    <Route path ='/about' element = {<About/>}/>
    <Route path='/favorites'element={<Favorites />} />
    </Switch>
    </div>

  </BrowserRouter>
  
  );
}

export default App;
