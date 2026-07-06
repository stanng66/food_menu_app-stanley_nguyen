// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 10, 2026
// --------------------
// app.js 
// ====================

import {useState} from "react";
import Header from "./header";
import CategoryFilter from "./categoryFilter";
import MenuList from "./menuList";
import "./App.css";
import Footer from "./footer";

function App() {

  const foodItems = [
    { id: 1, name: "Cheese Burger", category: "Main Course", price: 18.99, image: "cheeseburger.jpg", description: "Seasoned beef, a slice of cheese, toasted bun, lettuce, slice tomato, pickles, and in house made sauce" },
    { id: 2, name: "Caesar Salad", category: "Appetizer", price: 8.99, image: "caesar_salad.jpg", description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing" },
    { id: 3, name: "Ribeye Steak", category: "Main Course", price: 29.99, image: "ribeye_steak.jpg", description: "13oz ribeye steak, served with mashed potatoes and asparagus" },
    { id: 4, name: "Chocolate Cake", category: "Desserts", price: 9.99, image: "chocolate_cake.jpg", description: "Chocolate cake with a layer of chocolate ganache" },
    { id: 5, name: "Lemonade", category: "Drinks", price: 3.99, image: "lemonade.jpg", description: "Cold lemonade with a hint of mint" },
    { id: 6, name: "Pepperoni Pizza", category: "Main Course", price: 16.99, image: "pepperoni_pizza.jpg", description: "Classic pizza with pepperoni, mozzarella cheese, and tomato sauce" },
    { id: 7, name: "Cheese Cake", category: "Desserts", price: 6.99, image: "cheesecake.jpg", description: "Soft and creamy cheese cake with berry compote" },
    { id: 8, name: "Diet Coke", category: "Drinks", price: 2.99, image: "diet_coke.jpg", description: "Can diet coke" },
    { id: 9, name: "Calamari", category: "Appetizer", price: 14.99, image: "calamari.jpg", description: "Crispy fried calamari with marinara sauce. Garnished with parsley and lemon" },
    { id: 10, name: "Strawberry Shortcake", category: "Desserts", price: 7.99, image: "strawberry_shortcake.jpg", description: "Light shortcake dessert with whip cream" },
    { id: 11, name: "Crab Cakes", category: "Appetizer", price: 12.99, image: "crab_cake.jpg", description: "Seafood dish with lump crab, bread crumbs, and lemon" },
    { id: 12, name: "White Wine", category: "Drinks", price: 35.99, image: "white_wine.jpg", description: "Glass of white wine" }
  ];

  const categories = ["All", "Appetizer", "Main Course", "Desserts", "Drinks"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filteredItems = selectedCategory === "All" ? foodItems : foodItems.filter((item) => item.category === selectedCategory);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  }

  const clearCartItems = () => {
    setCartCount(0);
  }

  return (
    <div className="app-container">
      <Header cartCount={cartCount} clearCartItems={clearCartItems} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <MenuList items={filteredItems} addToCart={addToCart} />

      <Footer />
    </div>
  );
}

export default App;
