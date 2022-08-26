import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Allproducts from "./components/Allproducts/Allproducts";
import Menubar from "./components/Menubar/Menubar";
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

	const setCartCount = () => {
		setCount(count + 1);
	};
	return (
		<div className="App">
      <Menubar count={count}></Menubar>
      <Allproducts setCartCount= {setCartCount}></Allproducts>
		</div>
	);
}

export default App;
