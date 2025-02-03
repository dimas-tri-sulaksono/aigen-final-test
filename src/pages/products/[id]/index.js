import DetailMarchandise from "@/components/molecules/DetailMerchandise";
import React, { useState } from "react";

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
    <DetailMarchandise
      title={product.title}
      image={product.image}
      price={product.price}
    />
  );
};

export default ProductDetail;
