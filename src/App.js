import { useState, useEffect, Fragment } from "react";

import ProductList from "./components/ProductList";
import "./components/ProductList.css";
import CategoryList from "./components/CategoryList";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  let categoriesArray = [];

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => {
        setAllProducts(response.products);
      });
  }, []);

  const filterCategories = (category) => {
    if(!categoriesArray.includes(category)){
      categoriesArray.push(category);
    }
  };

  return (
    <Fragment>
      <CategoryList category={categoriesArray} />
      <div className="product-list">
        {allProducts.map((p) => (
          <div className="product-item">
            <ProductList onFilterCategory={filterCategories} product={p} key={p.id} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
