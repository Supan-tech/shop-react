import React from "react";

const ProductDisplay = ({ name, image, price, description }) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to the cart`);
  };
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-blue-500 font-bold">{price}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDisplay;
