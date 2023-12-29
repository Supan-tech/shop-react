import React from "react";
import ProductDisplay from "./ProductDisplay";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Apple Iphone 15 Pro Max",
      image: "https://arystorephone.com/wp-content/uploads/2023/09/iphone-15-pro-max-naturaltitanium.jpg",
      price: "$1779.99",
      description:
        "The iPhone 15 Pro Max comes with a new contoured titanium frame, a USB Type-C port at the bottom, a camera with 5.0x optical zoom, a customizable Action Button.",
    },
    {
      id: 2,
      name: "Airpod 3rd Generation",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861338000", 
      price: "$999.99",
      description:
        "AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear.",
    },
    {
      id: 3,
      name: "Apple Macbook Pro",
      image: "data:image/jpeg;base64,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", 
      price: "$1559.99",
      description:
        "Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM.",
    },
    {
      id: 4,
      name: "Asus Zephyrus",
      image: "https://www.gamingstorekh.com/Content/Upload/Item/02d646f5-b008-46f4-b849-b1c593604b7e.png", 
      price: "$1669.99",
      description:
        "A laptop that doesn't compromise on portability or performance. ASUS ROG Zephyrus G14 offers high-level gaming in 1920 x 1200 and good overall performance.",
    },
  ];

  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductDisplay
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
