import React, { useEffect, useState } from 'react';
import { getAllMovieList } from '../services/api.service';
import Card from '../components/card.component';
import { useHistory } from 'react-router-dom';

const MovieList = ()=>{
  const [movieList, setMovieList] = useState([]);
  const history = useHistory();

  const getAllMovielistFun = async (search='tamil')=>{
    const listdata = await getAllMovieList(search);
    console.log(listdata);
    setMovieList(listdata.data.Search || []);
  }

  useEffect(()=>{
    getAllMovielistFun()
  },[])

  return(
    <div className="masterContainer">
      Movie List
      <input type="search" onChange={(e)=>getAllMovielistFun(e.target.value)}/>
      {
        movieList.map((d,i)=>{
          return (
            <Card key={i} props={d}>
              <button onClick={()=>history.push('/info/'+d.imdbID)}>View info</button>
            </Card>
          )
        })
      }
    </div>
  )
}

export default MovieList;