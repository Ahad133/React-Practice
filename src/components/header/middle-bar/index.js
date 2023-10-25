// import logo from './images/logo.png'
import './index.css';
import { FaPhone, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';


function MiddleBar() {
  return (
    <div className="middle-bar">
    <div className="left-content1">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <h1>LOGO HERE</h1>
    </div>

    <div className="center-content1">
      <div className="search-field">
      <input type="text" placeholder="Search entire store here" />
      <button className="search-button">
          <i className="fa fa-search"></i>
      </button>
      </div>
    </div>

    <div className="right-content1">
    <button className="button1">
          <FaPhone /> +123456789
        </button>
        <button className="button1">
          <FaHeart /> Wishlist
        </button>
        <button className="button1">
          <FaShoppingCart />
        </button>
        <button className="button1">
          <FaUser /> 
        </button>
    </div>
  </div>
  );
}

export default MiddleBar;