// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 10, 2026
// --------------------
// categoryFilter.js lets the user choose a category through a filter button
// ====================
// Assignment requirement - One of three component that recieves props from the parent component (App.js). 
export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory}) {   // function({}) uses {} to recieve props for react
    return (
        <div className="category-buttons">
            {categories.map((categoryType) => (
                <button key={categoryType}
                   onClick={() => setSelectedCategory(categoryType)}>
                    {categoryType}
                </button>   
            ))}
        </div>
    );
}