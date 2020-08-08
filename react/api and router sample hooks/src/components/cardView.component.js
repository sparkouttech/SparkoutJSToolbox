import React from 'react';

const CardView = ({ props })=>{
  return(
    <div className="cardHolder">
      userId : <span>{props.userId}</span><br/>
      id : <span>{props.id}</span><br/>
      title : <span>{props.title}</span><br/>
      completed : <span>{JSON.stringify(props.completed)}</span><br/>
    </div>
  )
}

export default CardView;