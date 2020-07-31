import React from 'react';

const RecipeItem = ({ image }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.image} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-teal-500 text-xl mb-2">
          <strong>{image.name}</strong>
        </div>
        <ul>
          <li>
            <strong>Category: </strong>
            {image.category}
          </li>
          <li>
            <strong>Label: </strong>
            {image.label}
          </li>
          <li>
            <strong>Price: </strong>
            {image.price}
          </li>
          <li>
            <strong>Description: </strong>
            {image.description}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RecipeItem;
