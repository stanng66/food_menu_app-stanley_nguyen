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
// Assignment requirement - One of three component that recieves props from the parent component (App.js). 
export default function Header({cartCount, clearCartItems}) {
    return (
        <header className="app-header">
            <div className="header-title">
            <h1> Food Menu App </h1>   {/* Title of the app */}
            <h2> Stanley Nguyen</h2>
            <h3> Assignment 1 </h3>
            </div> 

            <div className="header-cart">
               <p><i className="fa-solid fa-cart-shopping"></i> {cartCount} items</p> 
                <button className="clear-cart-button" onClick={clearCartItems}> Clear Cart </button>
            </div>

        </header>
    )
}