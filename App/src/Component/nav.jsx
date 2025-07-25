import logoImg from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Nav = ({ onSearch }) => { // Receive onSearch prop
  const filterItems = (event) => {
    console.log("Filtering by:", event.target.type);
  };
  return (
    <div className="nav ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-md-row flex-column   justify-content-between align-items-center">
            <img src={logoImg} alt="Logo" className="nav__logo" />
            <form action="" onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
              <input
                type="text"
                onChange={onSearch} // Use the passed onSearch function
                className="bg-transparent border-1 border-danger rounded-1 fw-semibold text-white"
                placeholder="Search Food...."
              />
              <button className="bg-danger text-white rounded-1 border-0" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          <div className="col-12 ">
            <div className="nav__links align-items-center justify-content-center d-flex gap-3 ">
              <a className="btn bg-danger text-white" href="#all" type="all" onClick={filterItems}>All</a>
              <a className="btn bg-danger text-white" href="#breakfast" type="breakfast" onClick={filterItems}>Breakfast</a>
              <a className="btn bg-danger text-white" href="#lunch" type="lunch" onClick={filterItems}>Lunch</a>
              <a className="btn bg-danger text-white" href="#dinner" type="dinner" onClick={filterItems}>Dinner</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;