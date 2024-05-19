import React, { useState, useEffect } from 'react';
import CreateProductForm from './components/CreateProductForm';
import { ProductsGallery } from './components/ProductsGallery/ProductsGallery';
function App() {
  

  return (
    <>
      <div className='mx-auto'> 
        <CreateProductForm></CreateProductForm>
        <ProductsGallery></ProductsGallery>
      </div>
    </>
  );
}

export default App;
