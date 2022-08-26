import React from "react";

import "./SingleProduct.css";
import ReatModal from './../ReactModal/ReatModal';

const SingleProduct = (props) => {
	// console.log(props.product, props.setCartCount);
	const { setCartCount } = props;
	return (
		<div
			
			className="col-md-4">
			<div className="card p-3  border ">
				<img className="w-50 m-auto" src={props.product.image} alt="" />
				<h1>{props.product.title.slice(0, 10)}</h1>
				<div className="d-flex justify-content-around">
					<button onClick={setCartCount} className="btn btn-success">
						Addd to Cart
					</button>
                    <button className="btn btn-danger">delete</button>
                    
                    <ReatModal product={props.product}></ReatModal>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
