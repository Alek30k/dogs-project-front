import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from '../actions';
import style from './Style/DogCreate.module.css';

//input es mi estado local
function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = "Name is required";
    } else if (!input.name.match(/^[A-Za-z\s]+$/)){
        errors.name = "Only letters, please"
    
    }

    

    if (!input.min_height){
        errors.min_height = "Min height is required"
    }
    else if (input.min_height < 10){
    errors.min_height = "Must be more than 10 cm"
    }
    if (!input.max_height){
        errors.max_height = "Max height is required"
    }
    else if (input.max_height > 80){
        errors.max_height = "Must be less than 80 cm"
    }
    if (!input.min_weight){
        errors.min_weight = "Min weight is required"
    }
    else if (input.min_weight < 1){
        errors.min_weight = "Must be more than 1 kg"
    }
    if (!input.max_weight){
        errors.max_weight = "Max weight is required"
    }
    else if (input.max_weight > 100){
        errors.max_weight = "Must be less than 100 kg"
    }
   else if(Number(input.min_height) > Number(input.max_height)){
    errors.max_height = "Must be higher than min height" //Debe ser más alto que la altura mínima
    }
   else if(Number(input.min_weight) > Number(input.max_weight)){
    errors.max_weight = "Must be heavier than min weight" //Debe ser más pesada que el peso mínimo

    }
    
    return errors;

}

export default function DogsCreate(){
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)
    const [errors, setErrors] = useState({})

 
    const [input,setInput] = useState({
        name:"",
        heightMax:0,
        heightMin:0,
        weightMax:0,
        weightMin:0,
        life_span: 0,
        temperament:[]//lo seteo en un array para poder guardar la cantidad de temperamentos que quiera.
    })

    function handleChange(e){
        if(e.target.name === "heightMin"||e.target.name === "heightMax"|| e.target.name=== "weightMax"||e.target.name === "weightMin"||e.target.name === "life_span" ){
            if(e.target.value> 80){
                e.target.value = 80
                alert ("Can't enter that value") //No puedo ingresar ese valor
            }
            if(e.target.value<0){
                e.target.value= 0
                alert ("Can't enter that value")
            }
           
        }
        
        setInput({
            ...input,
            [e.target.name] : e.target.value  //cada vez que la funcion se ejecute a mi estado input ademas de lo que tiene agregale el target value de lo que esta modificando
        })

        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
            

        }))
    }
    
    function handeSelect(e){
        if (input.temperament.length < 5) { //creo para que si tiene menos de 5 temperamentos los pueda ingresar
            setInput({
              ...input,
              temperament: [...input.temperament, e.target.value],
            });
            const newArray = input.temperament;
            const find = newArray.indexOf(e.target.value);
      
            if (find >= 0) {
              newArray.splice(find, 1); //si lo encuentra al temperamento, lo elimina y que borre solo 1
            } else {
              newArray.push(e.target.value);
            }
            
            setInput({
              ...input,
              temperament: newArray,
            });
       
          } else {
            alert("The created dog can only have 5 temperaments at max");
          }
        }


    function handleDeleted(e){
        setInput({
            ...input,
            temperament: input.temperament.filter(temp => temp !== e)
        })
    }

    function handleSubmit(e){
        e.preventDefault(e)
        
        dispatch(postDog(input))
        alert ("¡Raza Creada!")
        setInput({
            name:"",
            heightMax:0,
            heightMin:0,
            weightMax:0,
            weightMin:0,
            life_span: 0,
            image:"",
            temperament:[],
        })
       
    }
    
    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch]);

    return (
        <div className={style.form}>
            
            <h1>Create Your Own Dog´s Breed!</h1>

            <form onSubmit= {(e)=> handleSubmit(e)}>
                <div>
                  <label>Name:</label>
                  <input
                  type="text"
                  value={input.name}
                  name = "name"
                    onChange={handleChange}
                    required
                  />  
                  {errors.name && (
                      <p className="error">{errors.name}</p>
                  )}

                </div>

               

                <div>
                    <label>Altura Minima:</label>
                    <input
                    type="number"
                    value={input.heightMin}
                    name = "heightMin"
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label>Peso Minimo:</label>
                    <input
                    type="number"
                    value={input.weightMin}
                    name = "weightMin"
                    onChange={handleChange}
                    required
                    />
                    {errors.weightMin && (
                        <p className="error">{errors.weightMin}</p>
                    )}
                </div>

                <div>
                    <label>Altura Maxima:</label>
                    <input
                    type="number"
                    min= "0"
                    max= "50"
                    value={input.heightMax}
                    name = "heightMax"
                    onChange={handleChange}
                    required
                    />
                </div>

                <div>
                    <label>Peso Maximo:</label>
                    <input
                    type="number"
                    value={input.weightMax}
                    name = "weightMax"
                    onChange={handleChange}
                    required
                    />
                    {errors.weightMax && (
                        <p className="error">{errors.weightMax}</p>
                    )}

                </div>
            
                <div>
                    <label>Imagen:</label>
                    <input
                    type="text"
                    value={input.image}
                    placeholder="image url"
                    name="image"
                    onChange={handleChange}
                    />                
                </div>

                <div>
                    <label>Años de Vida:</label>
                    <input
                    type="number"
                    value={input.life_span}
                    name = "life_span"
                    onChange={handleChange}
                    />
                </div>
                
                <select onChange={(e) => handeSelect(e)}>
        
                    {temperaments.map((temp)=>(
                        <option key={temp.id} value={temp.name}>{temp.name}</option>
                    ) )}
                    
                </select >

                <button className={style.button} type="submit">Create</button>
                <div>
            <Link to = '/home'><button className={style.link}>Back</button></Link>
            </div>
            </form>


            <div className={style.deletedbtn}>{input.temperament.map(e=>
                <div className="divTemp">
                    
                    <p>{e}</p>
                    <button className="botonX" onClick={()=> handleDeleted(e)}>❌</button>
                    
                </div>
                )}        
                </div>


        </div>
    )
}
        
        
