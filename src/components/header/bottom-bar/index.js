import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./index.css";

function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="left-buttons">
        <div class="dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Shop By Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Tape Backup Drives
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Tape Accesories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <a href="/" className="button">
          Home
        </a>
        <a href="/aboutus" className="button">
          About Us
        </a>
        <a href="/contactus" className="button">
          Contact Us
        </a>
        <a href="/repair" className="button">
          Repairs Services
        </a>
        <a href="/products" className="button">
          Products
        </a>
        <a href="/testimonials" className="button">
          Testimonials
        </a>
      </div>
      <button className="button right-button">
        Order a Product <i class="fa fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default BottomBar;
