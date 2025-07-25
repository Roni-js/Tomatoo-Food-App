import './Hero-sec.css';
import Item from './item-box/item';
import Nav from './nav';
import { useState } from 'react';

const HeroSec = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <>
      <Nav onSearch={handleSearch} />
      <section className="hero-sec">
        <div className="hero-content container">
          <Item searchTerm={searchTerm} />
        </div>
      </section>
    </>
  );
};

export default HeroSec;
