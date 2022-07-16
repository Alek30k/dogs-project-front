import axios from "axios";
export function getDogs() {

  return async function (dispatch) {
    try {
      var json = await axios("https://deploy-dogs-project.herokuapp.com/dogs"); //aca es donde se conecta el back con el front
      let temperaments = await axios("https://deploy-dogs-project.herokuapp.com/temperament");

      return dispatch({
        type: "GET_DOGS",
        temperaments: temperaments.data,
        payload: json.data,
      });
    } catch (error) {
      alert("Connection failed");
    }
  };
}

export function filterDogsbyName(payload) {
  return {
    type: "FILTER_BY_NAME",
    payload,
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let info = await axios("https://deploy-dogs-project.herokuapp.com/temperament", {});
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: info.data,
    });
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    const response = await axios.post("https://deploy-dogs-project.herokuapp.com/dog", payload);

    return response;
  };
}

export function filterDogsbyTemperament(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENT",
    payload,
  };
}

export function filterDogsbyWeight(payload) {
  return {
    type: "FILTER_BY_WEIGHT",
    payload,
  };
}

export function filterCreatedOrApi(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function getNameDogs(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("https://deploy-dogs-project.herokuapp.com/dogs?name=" + name);
      return dispatch({
        type: "GET_NAME_DOGS",
        payload: json.data, //es que lo que devuelve la ruta cuando le asigno algo por "name"
      });
    } catch (error) {
      alert("Try another breed");
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("https://deploy-dogs-project.herokuapp.com/dogs/" + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanDetail() {
  return {
    type: "CLEAN_DETAIL",
    // payload: {}
  };
}

export function deletedById(id) {
  return async function (dispatch) {
    try {
      const json = await axios.delete("https://deploy-dogs-project.herokuapp.com/deleted/" + id);
      return dispatch({
        type: "DELETED_BY_ID",
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addFavorite(payload) {
  return {
    type: "ADD_FAVORITE",
    payload,
  };
}

export function removeFavorite(payload) {
  return {
    type: "REMOVE_FAVORITE",
    payload,
  };
}

//  export const getDogs = () => {
//     return (dispatch) => {
//         axios.get("http:localhost:3001/dogs")
//             .then(response => {
//                 dispatch({
//                     type: 'GET_DOGS',
//                     payload: response.data.message
//                 })
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }
// }
