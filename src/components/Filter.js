import React from "react";

function Filter({ selectedCategory, searchBar, onSearchChange, onCategoryChange }) {

  return (
    <div className="Filter">
      <input type="text" name="search" value={searchBar} onChange={onSearchChange} placeholder="Search..." />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
