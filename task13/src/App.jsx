
//import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
    return (
        <div className="container">

            <h1>Our Products</h1>

            <div className="product-container">

                <ProductCard
                    image="https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg"
                    title="Laptop"
                    description="A powerful laptop for students and developers."
                />

                <ProductCard
                    image="https://img.magnific.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg?semt=ais_hybrid&w=740&q=80"
                    title="Smartphone"
                    description="A modern smartphone with amazing features."
                />

                <ProductCard
                    image="https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF1000,1000_QL80_.jpg"
                    title="Headphones"
                    description="Enjoy high quality music with headphones."
                />

            </div>

        </div>
    );
}

export default App;
