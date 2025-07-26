import "./item.css";
import { useState, useEffect } from "react";

// Dynamically set path for local vs GitHub Pages
const isLocal = window.location.hostname === "localhost";
const BASE_URL = isLocal ? "" : "/Tomatoo-Food-App";
const DATA_URL = `${BASE_URL}/items.json`;

const Item = ({ searchTerm, category }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(DATA_URL);
        const json = await response.json();
        setItems(json);
      } catch (error) {
        setError("Items Not Available");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const filteredItems = items
    ? items.filter((item) => {
        const matchesSearch =
          item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          category === "all" ||
          category === "" ||
          item.type.toLowerCase() === category.toLowerCase();
        return matchesSearch && matchesCategory;
      })
    : [];

  const itemDisplay = () => {
    if (loading) return <p className="text-white fs-2 text-center">Loading...</p>;
    if (error) return <p className="text-white fs-2 text-center">{error}</p>;
    if (filteredItems.length === 0)
      return <p className="text-white fs-2 text-center">No items match your search.</p>;

    return filteredItems.map((item, index) => (
      <div
        key={index}
        className="col-xxl-4 col-xl-4 col-lg-6 col-12 d-flex rounded-5 border item-div"
        type={item.type}
      >
        <img src={`${BASE_URL}${item.image}`} alt={item.name} />
        <div className="item-det flex-grow-1">
          <h3 className="text-white">{item.name}</h3>
          <p>{item.text}</p>
          <div className="d-flex justify-content-end mx-3 py-4">
            <button className="btn btn-danger buy-btn p-1">
              ${item.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container py-5 mx-lg-0 px-lg-0 mx-xl-3 px-xl-3 mx-xxl-5 px-xxl-5 main-items-div">
      <div className="container">
        <div className="row gap-xl-4 gap-3 sss d-sm-flex d-block">
          {itemDisplay()}
        </div>
      </div>
    </div>
  );
};

export default Item;
