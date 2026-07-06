// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 10, 2026
// --------------------
// app.js is a parent component that renders the header, category filter, menu list, and footer components
// ====================
import {useState} from "react";
import Header from "./header";
import CategoryFilter from "./categoryFilter";
import MenuList from "./menuList";
import "./App.css";
import Footer from "./footer";

function App() {

  const foodItems = [
    { id: 1, name: "Caesar Salad", price: 8.99, category: "Appetizer", image: "caesar_salad.jpg", description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing" },
    { id: 2, name: "Calamari", price: 14.99, category: "Appetizer", image: "calamari.jpg", description: "Crispy fried calamari with marinara sauce. Garnished with parsley and lemon" },
    { id: 3, name: "Crab Cakes", price: 12.99, category: "Appetizer", image: "crab_cake.jpg", description: "Seafood dish with lump crab, bread crumbs, and lemon" },
    { id: 4, name: "Cheese Burger", price: 18.99, category: "Main Course", image: "cheeseburger.jpg", description: "Seasoned beef, a slice of cheese, toasted bun, lettuce, slice tomato, pickles, and in house made sauce" },
    { id: 5, name: "Ribeye Steak", price: 29.99, category: "Main Course", image: "ribeye_steak.jpg", description: "13oz ribeye steak, served with mashed potatoes and asparagus" },
    { id: 6, name: "Pepperoni Pizza", price: 16.99, category: "Main Course", image: "pepperoni_pizza.jpg", description: "Classic pizza with pepperoni, mozzarella cheese, and tomato sauce" },
    { id: 7, name: "Chocolate Cake", price: 9.99, category: "Desserts", image: "chocolate_cake.jpg", description: "Chocolate cake with a layer of chocolate ganache" },
    { id: 8, name: "Cheese Cake", price: 6.99, category: "Desserts", image: "cheesecake.jpg", description: "Soft and creamy cheese cake with berry compote" },
    { id: 9, name: "Strawberry Shortcake", price: 7.99, category: "Desserts", image: "strawberry_shortcake.jpg", description: "Light shortcake dessert with whip cream" },
    { id: 10, name: "Lemonade", price: 3.99, category: "Drinks", image: "lemonade.jpg", description: "Cold lemonade with a hint of mint" },
    { id: 11, name: "Diet Coke", price: 2.99, category: "Drinks", image: "diet_coke.jpg", description: "Can diet coke" },
    { id: 12, name: "White Wine", price: 35.99, category: "Drinks", image: "white_wine.jpg", description: "Glass of white wine" }
  ];

  const categories = ["All", "Appetizer", "Main Course", "Desserts", "Drinks"];
  
  // Assignment requirement - One component must utilize the state feature or useState Hook. You should have a minimum of 2 state variables in your application. These variables can be in any of the components.
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

      <MenuList items=
        {selectedCategory === "All" ? foodItems : filteredItems} 
        addToCart={addToCart}
        selectedCategory={selectedCategory}
      />


      <Footer />
    </div>
  );
}

export default App;
