import React from 'react';
import { Link } from 'react-router-dom';

const ListElementContainer = ({ children, props }) => {
  return (
    <>
      <Link to={`/info/${props.id}`} className="liContainer">{
        children
      }</Link>
      <br />
    </>
  )
}

export default ListElementContainer;