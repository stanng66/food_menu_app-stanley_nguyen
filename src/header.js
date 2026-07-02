// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN 
// Ronak 
// July 10, 2026
// --------------------
// header.js displays the tile and displays cart item count
// ====================
export default function Header({cartCount}) {
    return (
        <header style={{}}>   {/* Add css styling here */}
            <h1> Food Menu App </h1>                 {/* Title of the app */}
            <p> Cart: {cartCount} items </p>   {/* Shows number of items in the cart */}
        </header>
    )
}