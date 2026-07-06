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
            
            <div className="food-info">
                <div className="food-header">
                    <span className="food-name">{foodItem.name}</span>
                    <span className="food-category">{foodItem.category}</span>
                    <span className="food-price">${foodItem.price.toFixed(2)}</span>
                </div>

                <p className="food-description">{foodItem.description}</p>

                <button onClick={() => addToCart(foodItem)} style={{ padding: "8px 12px" }}> Add to Cart </button>
            </div>

            <div className="food-image">
                <img src={`/images/${foodItem.image}`} alt={foodItem.name} />
            </div>
        </div>
    );
}