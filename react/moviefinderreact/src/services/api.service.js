import Axios from "axios";

export const getAllMovieList = (search)=>{
  return Axios.get('http://www.omdbapi.com/?apikey=42e01f00&s='+search);
}

export const getMovieInfo = (id)=>{
  return Axios.get('http://www.omdbapi.com/?apikey=42e01f00&i='+id);
}