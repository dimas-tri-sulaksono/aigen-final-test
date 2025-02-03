import DetailMarchandise from "@/components/molecules/DetailMerchandise";
import React from "react";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return {
    props: { product },
  };
}

const ProductDetail = ({ product }) => {
  return (
    // <div>
    //   <h1>{product.title}</h1>
    //   <img src={product.image} alt={product.title} style={{ width: "200px" }} />
    //   <p>{product.description}</p>
    //   <p>Price: ${product.price}</p>
    //   <a href="/products">Back to Products</a>
    // </div>

    <DetailMarchandise title={product.title} image={product.image} price={product.price} />
  );
};

export default ProductDetail;
