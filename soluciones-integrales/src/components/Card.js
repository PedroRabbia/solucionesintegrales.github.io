import React from 'react'
import { Link } from 'react-router-dom';

function Card({title,imageSource,url}) {
  return (
    <div className='card text-center'>
         <img src={imageSource} alt="" />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <a href={url} className='btn btn-outline-info rounded-4'>VER TRABAJOS</a>
        </div>
      
    </div>
  )
}

export default Card
