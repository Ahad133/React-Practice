import React from "react";

const ProductCard = ({ product }) => {
  const stars = product.rating;
  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starIcons.push(<i key={i} className="fa fa-star"></i>);
    } else if (i - 0.5 === stars) {
      starIcons.push(<i key={i} className="fa fa-star-half"></i>);
    } else {
      starIcons.push(<i key={i} className="fa fa-star-o"></i>);
    }
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", marginBottom: "27px" }}
        />
      </div>
      <div className="review-stars">
        {starIcons}
        <span className="num-reviews">Reviews({product.numReviews})</span>
      </div>
      <div className="product-details">
        <h3>
          <b>{product.title}</b>
        </h3>
        <p>{product.description}</p>
        <div className="price">
          <b>
            <span className="sale-price">${product.salePrice}</span>
            <span className="original-price">${product.originalPrice}</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
