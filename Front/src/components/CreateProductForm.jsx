import React, { useState } from 'react';
import  supabase  from '../utils/supabase';  

function CreateProductForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productUnits, setProductUnits] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [productImages, setProductImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImageUrls = [];

    for (let i = 0; i < productImages.length; i++) {
      const imageFile = productImages[i];
      const fileName = `${Date.now()}_${imageFile.name}`;
      const { data, error } = await supabase.storage
        .from('Products-Photos')
        .upload(`public/${fileName}`, imageFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Error uploading image:', error);
        return;
      }

      const imageUrl = supabase.storage
        .from('Products-Photos')
        .getPublicUrl(`public/${fileName}`).data.publicUrl;
      console.log(imageUrl)
      uploadedImageUrls.push(imageUrl);
    }

    // Insertar datos del producto en la base de datos
    const { data, error } = await supabase
      .from('Products')
      .insert([
        {
          name: productName,
          price: productPrice,
          units: productUnits,
          description: productDescription,
          photos: uploadedImageUrls.join(','),  
        },
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };

  const handleFileChange = (e) => {
    setProductImages(e.target.files);
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Product Name */}
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="product-name"
          >
            Product Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="product-name"
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        {/* Product Price */}
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="product-price"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="product-price"
            type="number"
            step="0.01"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        {/* Product Units */}
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="product-units"
          >
            Units
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="product-units"
            type="number"
            step="1"
            placeholder="Units"
            value={productUnits}
            onChange={(e) => setProductUnits(e.target.value)}
          />
        </div>
        {/* Product Description */}
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="product-description"
          >
            Description
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="product-description"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        {/* Product Images */}
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="product-images"
          >
            Upload Images
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="product-images"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-end px-3 mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create Product
        </button>
      </div>
    </form>
  );
}

export default CreateProductForm;
