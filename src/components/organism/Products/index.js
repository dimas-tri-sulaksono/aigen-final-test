import FilterProducts from "@/components/molecules/FilterProducts";
import React, { useEffect, useRef, useState } from "react";
import CardMarchandise from "@/components/molecules/CardMerchandise";
import { formatCurrency } from "@/helper/util/formatCurrency";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // back to top
  const topRef = useRef(null);

  // get products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await getProducts();
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // back to top lagi
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div ref={topRef}></div>
          <div className="container relative z-20 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-16 lg:pt-16 xl:pt-20">
            <div className="mb-8 mt-12 md:mb-10 lg:mb-[50px] xl:mb-[60px]">
              <div
                id="product-digital"
                className="flex items-center justify-between"
              >
                <h1 className="text-title text-main md:mb-4 lg:mb-4">
                  Lorem Ipsum Dolor Sit Amet
                </h1>
              </div>
              <FilterProducts />
              <div className="relative z-10 mt-6">
                <div>
                  <div className="grid grid-cols-2 !items-stretch gap-3 md:flex md:flex-wrap md:justify-center md:gap-4">
                    {products.map((product) => (
                      <>
                        <CardMarchandise
                          id={product.id}
                          title={product.title}
                          image={product.image}
                          price={formatCurrency(product.price, "en-US", "USD")}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-primary fixed bottom-5 right-5 z-50 cursor-pointer rounded-md px-3 py-2 text-sm text-white"
          >
            Scroll to Top
          </button>
        </>
      )}
    </>
  );
};

export default Products;
