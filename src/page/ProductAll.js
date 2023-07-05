import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [Productlist, setProductlsit] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/1004minjeong/hnm/products?q=${searchQuery}`;
    let resposive = await fetch(url);
    let data = await resposive.json();
    console.log(resposive, data);
    setProductlsit(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <div className="container productAll">
        <div className="row">
          {Productlist.map((item) => {
            return (
              <div key={item.id} className="col-md-3 col-12">
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
