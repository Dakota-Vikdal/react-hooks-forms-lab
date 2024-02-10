import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBar, setSearchBar] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function onSearchChange(event) {
    setSearchBar(event.target.value)
  }
  
  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(searchBar.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm  handleSubmit={handleSubmit}/>
      <Filter searchBar={searchBar} onSearchChange={onSearchChange} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
