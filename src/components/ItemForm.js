import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

function handleItem(event) {
  setNewItem(event.target.value); // this targets the value for text input's onChange state
  // the state is the current option from the ItemForm component's html select that appears on screen
}

function handleCategory(event) {
  setNewCategory(event.target.value); // the category of setNewCategory is displayed when the site boots up
}

function handleSubmit(event) {
  event.preventDefault();
  onItemFormSubmit({
    id:uuid(),
    name:newItem,
    category:newCategory

  })
}
  return (
    <form className="NewItem" 
    onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input type="text" name={newItem} 
        onChange={handleItem}/>
      </label>

      <label>
        Category:
        <select name={newCategory}
        onChange={handleCategory}>
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
