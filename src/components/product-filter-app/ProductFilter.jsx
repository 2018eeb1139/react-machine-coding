import "./styles.css";
import { items } from "./data";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState(items);
  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [selectedFilters, setSelectedFilters] = useState([]);
  console.log(selectedFilters);
  console.log(products);
  const handleSelectedFilters = (e) => {
    const id = e.target.id;
    setSelectedFilters((prev) => {
      let newFilters = [...prev];
      if (newFilters.find((item) => item === filters[id])) {
        return newFilters.filter((item) => item !== filters[id]);
      } else {
        newFilters = [...newFilters, filters[id]];
        return newFilters;
      }
    });
  };

  useEffect(() => {
    if (selectedFilters.length > 0) {
      const newProducts = items.filter((item) =>
        selectedFilters.includes(item.category)
      );
      setProducts(newProducts);
    } else {
      setProducts(items);
    }
  }, [selectedFilters]);
  return (
    <div className="App">
      <div className="filters" onClick={handleSelectedFilters}>
        {filters.map((filter, index) => (
          <button
            key={index}
            id={index}
            className={`${selectedFilters.includes(filter) && "selected"}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="products">
        {products.map(({ name, category }, index) => {
          return (
            <div className="item" key={index}>
              {name}
              <p>{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
