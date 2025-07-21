import "./item.css";
import { useState } from "react";
import { useEffect } from "react";

const BASE_URL = "http://localhost:9000"; 

const Item = () => {

const [items, setItems] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

// Network Call:


useEffect(() => {

const fetchItems = async () => {

  setLoading(true);

try {
   const response = await fetch(BASE_URL);
  const json = await response.json();
  setLoading(false);
  setItems(json);
} catch (error) {
  setError("Items Not Available");
}
}
fetchItems();
}, []);



  const itemData = items || [];

  const itemDisplay = () => {
    if (itemData.length === 0) {
if(error) return <p className="text-white fs-2 text-center">{error}</p>;
if (loading) return <p className="text-white fs-2 text-center">Loading...</p>;
    }

    return itemData.map((item, index) => (
      <div
        key={index}
        className=" col-xxl-4 col-xl-4 col-lg-6 col-12 d-flex rounded-5 border item-div"
        type={item.type}
      >
        <img src={BASE_URL + item.image} alt={item.name} />
        <div className="item-det flex-grow-1">
          <h3 className="text-white">{item.name}</h3>
          <p>{item.text}</p>
          <div className="d-flex justify-content-end mx-3 py-4">
            <button className="btn btn-danger buy-btn p-1">${item.price.toFixed(2)}</button>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="container py-5 mx-lg-0 px-lg-0 mx-xl-3 px-xl-3 mx-xxl-5 px-xxl-5 main-items-div">
      <div className="container">
        <div className="row gap-xl-4 gap-3 sss d-sm-flex d-block">{itemDisplay()}</div>
      </div>
    </div>
  );
};

export default Item;
export const foodSearch = (e) => {
  const typedValue = e.target.value;
   console.log(typedValue);
};