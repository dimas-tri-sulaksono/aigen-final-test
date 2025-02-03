import axios from "axios";

export const getProducts = async () => {
  try {
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
    const response = await axios.get(`https://fakestoreapi.com/products`);

    return response.data;
  } catch (error) {
    throw new Error("failed to fetch data : ", error);
  }
};
