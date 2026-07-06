// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 10, 2026
// --------------------
// menuList.js renders a list of menuItem components
// ====================
// Assignment requirement - One of three component that recieves props from the parent component (App.js). 
import MenuItem from "./menuItem";

export default function MenuList({ items, addToCart, selectedCategory, categoryMap }) {

    if (selectedCategory !== "All") {
        return (
            <div className="menu-list">
                <h2 className="menu-category-title">{selectedCategory}</h2>

                {items.map(item => (
                    <MenuItem key={item.id} foodItem={item} addToCart={addToCart} />
                ))}
            </div>
        );
    }

    const foodCategories = ["Appetizer", "Main Course", "Desserts", "Drinks"];

    return (
        <div>
            {foodCategories.map(category => {
                const categoryItems = items.filter(item => categoryMap[category].includes(item.id));

                if (categoryItems.length === 0) return null;

                return (
                    <div key={category} className="menu-category">
                        <h2 className="menu-category-title">{category}</h2>

                        {categoryItems.map(item => (
                            <MenuItem key={item.id} foodItem={item} addToCart={addToCart} />
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
