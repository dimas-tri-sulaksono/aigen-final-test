import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${api}/products`);
    // const response = await axios.get(`https://fakestoreapi.com/products`);

    return response.data;
  } catch (error) {
    throw new Error("failed to fetch data : ", error);
  }
};
