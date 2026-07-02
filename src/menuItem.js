// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 10, 2026
// --------------------
// menuItem.js displays a single food item and adds item to cart button
// ====================

export default function MenuItem({ foodItem, addToCart }) {
    return (
        <div className="menu-item">
            <h3> {foodItem.name} </h3>
            <p> Category: {foodItem.category} </p>
            <p> Price: ${foodItem.price.toFixed(2)} </p>
            <button onClick={() => addToCart(foodItem)} style={{ padding: "8px 12px" }}> Add to Cart </button>
        </div>
    );
}