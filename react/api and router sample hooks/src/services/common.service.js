import axios from 'axios';

// For getting all list element
export const getList = ()=>{
  return axios.get('https://jsonplaceholder.typicode.com/todos');
}