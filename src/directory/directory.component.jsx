import React from 'react'
import CategoryItem from '../components/category-item/category-item.component';


const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return (
          <CategoryItem key={id} category={{title, id, imageUrl}}/>
        );
      })}
    </div>
  )
}

export default Directory