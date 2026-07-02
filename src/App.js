// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN 
// Ronak 
// July 10, 2026
// --------------------
// app.js 
// ====================

import {useState} from "react";
import Header from "./header";
import CategoryFilter from "./categoryFilter";
import MenuList from "./menuList";

function App() {

  const foodItems = [
    { id: 1, name: "Burger", category: "Main Course", price: 14.99},
    { id: 2, name: "Ceasar Salad", category: "Appetizer", price: 8},
    { id: 3, name: "Steak", category: "Main Course", price: 29.99},
    { id: 4, name: "Chocolate Cake", category: "Desserts", price: 9.99},
    { id: 5, name: "Lemonade", category: "Drinks", price: 3.99},
  ];

  const categories = ["All", "Appetizer", "Main Course", "Desserts", "Drinks"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filteredItems = selectedCategory === "All" ? foodItems : foodItems.filter((item) => item.category === selectedCategory);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <div>
      <Header cartCount={cartCount} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <MenuList items={filteredItems} addToCart={addToCart} />
    </div>
  );
}

export default App;
