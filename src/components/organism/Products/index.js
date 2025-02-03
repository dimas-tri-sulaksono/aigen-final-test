import FilterProducts from "@/components/molecules/FilterProducts";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CardMarchandise from "@/components/molecules/CardMerchandise";
import { formatCurrency } from "@/helper/util/formatCurrency";
import { getProducts } from "@/services/products";

const Products = () => {
  const [products, setProducts] = useState([]); // produk yang ditampilin
  const [allProducts, setAllProducts] = useState([]); // semua produk bakal disimpen di sini
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); // produk yang ditampilin pertama kali
  const topRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data); // nyimpen semua data di state
        setProducts(data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // fungsi buat nampilin lebih banyak produk
  const showMoreProducts = useCallback(() => {
    const newVisibleCount = visibleCount + 4; // nampilin 4 produk lain setiap tombol diklik
    setVisibleCount(newVisibleCount);
    setProducts(allProducts.slice(0, newVisibleCount)); // update daftar produk yang ditampilin
  }, [visibleCount, allProducts]);

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
            {/* tombol show more */}
            {visibleCount < allProducts.length && (
              <button
                onClick={showMoreProducts}
                className="mx-auto mb-10 block rounded-[8px] border-2 border-[#08A081] bg-white pb-[12px] pl-[16px] pr-[16px] pt-[12px] text-[12px] font-bold text-[#08A081] lg:text-base"
              >
                Show More
              </button>
            )}
          </div>

          {/* tombol scroll to top */}
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
