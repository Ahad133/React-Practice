import React from "react";
import ProductCard from '../../components/product-slider/product-card.js';
import products from '../../components/product-slider/products';
import './index.css'

export default function Products() {
  return (
    <div className="products-container">
        <div className="top">
        <h1>PRODUCTS</h1>
      </div>
      <div className="products">
      <div className="row">
        <div className="col-lg-3" style={{paddingLeft:"80px", paddingTop:"40px"}}>
        <div className="sort">
        <h4>Sort By</h4>
        <select style={{width:'90%', height:'40px'}}>
              <option value="category1">By Name</option>
              <option value="category2">By Date</option>
              <option value="category1">Ascending</option>
              <option value="category2">Descending</option>
        </select>
        </div>
        <div className="avail">
        <h4>Availability</h4>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">In Stock (1)</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox2" />
        <label htmlFor="checkbox2" style={{color:'grey'}}>Out of Stock (0)</label>
        </div>
        </div>
        <div className="price-slider">
        <h4>Price</h4>
        <input type="text" placeholder="0" style={{width:'30%'}}/>
        <input type="text" placeholder="250" style={{width:'30%'}}/>
        <div className="price-slide">
        <input type="range" min="0" max="100" style={{width:'90%'}}/>
        </div>
        </div>
        <div className="category">
        <h4>Category Type</h4>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        <div className="check">
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Lorem Ipsum</label>
        </div>
        </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-4">
            <ProductCard product={products[0]}/>
            </div>
            <div className="col-lg-4">
            <ProductCard product={products[1]}/>
            </div>
            <div className="col-lg-4">
            <ProductCard product={products[2]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" >
            <ProductCard product={products[3]}/>
            </div>
            <div className="col-lg-4" >
            <ProductCard product={products[4]}/>
            </div>
            <div className="col-lg-4" >
            <ProductCard product={products[5]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" >
            <ProductCard product={products[6]}/>
            </div>
            <div className="col-lg-4" >
            <ProductCard product={products[7]}/>
            </div>
            <div className="col-lg-4" >
            <ProductCard product={products[0]}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
