import React from 'react';
import { useSelector } from 'react-redux'

const CardView = ({ props })=>{
  const localState = useSelector(data => data)
  return(
    <div className="cardHolder">
      {JSON.stringify(localState)}
      <hr/>
      userId : <span>{props.userId}</span><br/>
      id : <span>{props.id}</span><br/>
      title : <span>{props.title}</span><br/>
      completed : <span>{JSON.stringify(props.completed)}</span><br/>
    </div>
  )
}

export default CardView;