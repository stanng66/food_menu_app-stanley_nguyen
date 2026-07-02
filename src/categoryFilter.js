// ====================
// Assignment 1
// Stanley Nguyen
// Humber College
// CPAN 
// Ronak 
// July 10, 2026
// --------------------
// categoryFilter.js lets the user choose a category through a filter button
// ====================

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory}) {   // function({}) uses {} to recieve props for react
    return (
        <div style={{margin: "20px"}}>
            {categories.map((categoryType) => (
                <button key={categoryType}
                   onClick={() => setSelectedCategory(categoryType)}
                >
                    {categoryType}
                </button>   
            ))}
        </div>
    );
}