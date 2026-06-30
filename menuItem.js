// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN 
// Ronak 
// July 10, 2026
// --------------------
// menuItem.js displays a single food item and adds item to cart button
// ====================

export default function menuItem({ foodItem, addToCart }) {
    return (
        <div style={{   // css styling within the js, or make a css file seperately for this js file

        }}>
            <h3> {foodItem.name} </h3>
            <p> Category: {foodItem.category} </p>
            <p> Price: ${foodItem.price.toFixed(2)} </p>
            <button onClick={() => addToCart(foodItem)} style={{ padding: "8px 12px" }}> Add to Cart </button>
        </div>
    );
}