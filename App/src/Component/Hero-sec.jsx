import './Hero-sec.css';
import Item from './item-box/item';
import Nav from './nav';
import { useState } from 'react';

const HeroSec = () => {
  const [searchTerm, setSearchTerm] = useState(""); // for search input
  const [category, setCategory] = useState("");     // for buttons like 'lunch'

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const handleCategoryChange = (type) => {
    setCategory(type); // 'breakfast', 'lunch', 'all'
  };

  return (
    <>
      <Nav onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      <section className="hero-sec">
        <div className="hero-content container">
          <Item searchTerm={searchTerm} category={category} />
        </div>
      </section>
    </>
  );
};

export default HeroSec;
