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

import MenuItem from "./menuItem";

export default function MenuList({ items, addToCart }) {
    return (
        <div className="menu-list">
            {items.map((itemContent) => (
                <MenuItem key={itemContent.id} foodItem={itemContent} addToCart={addToCart} />
            ))}
        </div>
    );
}