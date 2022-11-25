import React, { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(['goku']);

  const handleAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([ newCategory], ...categorias);
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={handleAddCategory}
      />
        {
          categorias.map((categoria) =>
          (
            <GifGrid
              key={categoria}
              categoria={categoria}
            />
          ))
        }
    </>
  )
}
