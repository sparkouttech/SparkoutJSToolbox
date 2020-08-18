import React, { useEffect, useState } from 'react';
import { getMovieInfo } from '../services/api.service';
import { useParams, useHistory } from 'react-router-dom';
import Card from '../components/card.component';

const MovieInfo = ()=>{
  const param = useParams();
  const history = useHistory();
  const [movieInfo,setMovieInfo] = useState({});

  const getMovieInfoFun = async ()=>{
    const info = await getMovieInfo(param.id);
    console.log(info)
    setMovieInfo(info.data);
  }

  useEffect(()=>{
    getMovieInfoFun();
  },[])

  return(
    <div>
      movie info
      <button onClick={()=>history.goBack()}>go back</button>
      <Card props={movieInfo}>
        <p>Actors : {movieInfo.Actors}</p>
        <p>Plot : {movieInfo.Plot}</p>
        <p>Language : {movieInfo.Language}</p>
      </Card>
      
    </div>
  )
}

export default MovieInfo;