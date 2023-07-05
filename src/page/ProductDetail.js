import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/1004minjeong/hnm/products/${id}`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []); //의존성 배열이 비어있다면 컴퍼넌트가 실행될때 한번만 함수가 실행됨.

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 d-flex justify-content-end">
          <img src={product?.img} />
        </div>
        <div className="col-6 ps-5 pt-3 d-flex flex-column gap-2 ">
          <div className="fw-bolder">{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice ? "Conscious choice" : ""}</div>
          <div>
            <select class="form-select" aria-label="Default select example">
              <option selected>SIZE</option>
              {product?.size.length > 0 &&
                product?.size.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
            </select>
          </div>
          <button className="btn btn-primary">추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
