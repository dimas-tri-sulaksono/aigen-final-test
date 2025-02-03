import DetailMarchandise from "@/components/molecules/DetailMerchandise";
import useSessionCheck from "@/hooks/useSessionCheck";

const api = process.env.NEXT_PUBLIC_API;

export async function getServerSideProps(context) {
  const { id } = context.params;
  // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const response = await fetch(`${api}/products/${id}`);
  const product = await response.json();

  return {
    props: { product },
  };
}

const ProductDetail = ({ product }) => {
  const isLoading = useSessionCheck();

  return (
    <DetailMarchandise
      title={product.title}
      image={product.image}
      price={product.price}
    />
  );
};

export default ProductDetail;
