// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 10, 2026
// --------------------
// header.js displays the tile and displays cart item count
// ====================
export default function Header({cartCount}) {
    return (
        <header className="app-header">
            <div className="header-title">
            <h1> Food Menu App </h1>   {/* Title of the app */}
            <h2> Stanley Nguyen</h2>
            <h3> Assignment 1 </h3>
            </div> 

            <div className="header-cart">
            {/*<p> Cart: {cartCount} items </p> */}  {/* Shows number of items in the cart */}
            <p><i className="fa-solid fa-cart-shopping"></i> {cartCount} items</p>
            </div>

        </header>
    )
}