import "./item.css";
import { useState } from "react";
import { useEffect } from "react";

const BASE_URL = "http://localhost:9000/"; 

const Item = () => {

  const itemData = [];

  const itemDisplay = () => {
    if (itemData.length === 0) {
      return <p className="text-white fs-2 text-center empty-message">No items available</p>;
    }

    return itemData.map((item, index) => (
      <div
        key={index}
        className="col-md-4 col-sm-6 d-flex rounded-5 border item-div"
        type={item.type}
      >
        <img src={item.image} alt={item.name} />
        <div className="item-det flex-grow-1">
          <h3 className="text-white">{item.name}</h3>
          <p>{item.text}</p>
          <div className="d-flex justify-content-end mx-3 py-4">
            <button className="btn btn-danger buy-btn p-1">{item.price}</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container py-3 my-3 item-div">
      <div className="container-fluid">
        <div className="row gap-4">{itemDisplay()}</div>
      </div>
    </div>
  );
};

export default Item;
