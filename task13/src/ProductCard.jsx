
//import React from "react";

function ProductCard(props) {
    return (
        <div className="product-card">

            <img src={props.image} alt={props.title} />

            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <button>Buy Now</button>

        </div>
    );
}

export default ProductCard;
