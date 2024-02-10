import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleSubmit}) {
  const [foodName, setFood] = useState("")
  const [categoryName, setCategory] = useState('Produce')
  
  function handleFood(e) {
    setFood(e.target.value)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
  }

  function handleSubmitForm(e) {
    e.preventDefault()
    handleSubmit({
      id: uuid(),
      name: foodName,
      category: categoryName
    })
    setFood('')
  }

  return (
    <form className="NewItem" onSubmit={handleSubmitForm}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFood} value={foodName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={categoryName}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
