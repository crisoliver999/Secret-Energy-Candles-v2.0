import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/shop.css";

export default function ShopItem(props) {
    return (
        <div className="product">
            <Link to="/" className="product-link" onClick={props.onClick}>
                <img className="product-img" src={props.image} alt="" />
            </Link>
            <h2 className="product-name">{props.name}</h2>
            <p className="product-price">{props.price}</p>
        </div>
    );
}
