import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

function handleItem(event) {
  setNewItem(event.target.value);
}

function handleCategory(event) {
  setNewCategory(event.target.value);
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
