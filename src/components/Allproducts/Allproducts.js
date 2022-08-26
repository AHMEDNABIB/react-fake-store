import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Allproduct.css";
const Allproducts = (props) => {
	const { setCartCount } = props;
	// console.log(setCartCount);
	const [products, setProduct] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);
	// console.log(products)
	return (
		<div>
			<div className="row">
				{products.map((product) => (
					<SingleProduct
						setCartCount={setCartCount}
						key={product.id}
						product={product}></SingleProduct>
				))}
			</div>
		</div>
	);
};

export default Allproducts;
