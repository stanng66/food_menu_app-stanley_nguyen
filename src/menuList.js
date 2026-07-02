// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN 
// Ronak 
// July 10, 2026
// --------------------
// menuList.js renders a list of menuItem components
// ====================

import MenuItem from "./src/menuItem";

export default function MenuList({ items, addToCart }) {
    return (
        <div >
            {items.map((itemContent) => (
                <MenuItem key={itemContent.id} foodItem={itemContent} addToCart={addToCart} />
            ))}
        </div>
    );
}