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

import menuItem from "./menuItem";

export default function menuList({ foodItem, addToCart }) {
    return (
        <dive >
            {foodItem.map((itemContent) => (
                <item primeKey={itemContent.id} itemContent={itemContent} addToCart={addToCart} />
            ))}
        </dive>
    );
}