import logoImg from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ onSearch, onCategoryChange }) => {
  const filterItems = (event) => {
    const selected = event.target.getAttribute("type");
    onCategoryChange(selected); // sends selected type back to HeroSec
  };

  return (
    <div className="nav">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <img src={logoImg} alt="Logo" className="nav__logo" />
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                onChange={onSearch}
                className="bg-transparent border-danger rounded-1 text-light fw-semibold"
                placeholder="Search Food..."
              />
              <button className="bg-danger text-white rounded-1 border-0">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>

          <div className="col-12">
            <div className="nav__links d-flex gap-3 justify-content-center">
              <a className="btn bg-danger text-white" type="all" onClick={filterItems}>All</a>
              <a className="btn bg-danger text-white" type="breakfast" onClick={filterItems}>Breakfast</a>
              <a className="btn bg-danger text-white" type="lunch" onClick={filterItems}>Lunch</a>
              <a className="btn bg-danger text-white" type="dinner" onClick={filterItems}>Dinner</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
