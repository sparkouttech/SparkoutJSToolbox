import React from 'react';

const Card = ({ props, children })=>{
  return(
    <div className="card">
      <img src={props.Poster} alt="No Poster"/>
      <div className="info">
        <p>Title : {props.Title}</p>
        <p>Year : {props.Year}</p>
        {children}
      </div>
    </div>
  )
}

export default Card;