import React, { useState, useEffect } from 'react';
import supabase from '../../utils/supabase';

export const ProductsGallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('Products')
        .select('*');

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              {product.photos && product.photos.split(',').map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={product.name} className="w-full h-full object-cover" />
              ))}
            </div>
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
