import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [categories, setCategories] = useState([
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Mango"]
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Tomato", "Broccoli"]
    },
    {
      name: "Dairy",
      items: ["Milk", "Cheese", "Yogurt"]
    }
  ]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [newItem, setNewItem] = useState("");

  const handleClick = (index) => {
    setActiveCategory(index);
  }

  const handleChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleAddItem = () => {
    const newCategories = [...categories];
    newCategories[activeCategory].items.push(newItem);
    setCategories(newCategories);
    setNewItem("");
  }

  return (
    <div id="main">
      <h1>Shopping List</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} onClick={() => handleClick(index)} className={`category ${activeCategory === index ? 'active' : ''}`}>
            {category.name}
          </div>
        ))}
      </div>
      <div className="items">
        {categories[activeCategory].items.map((item, index) => (
          <div key={index} className="item">{item}</div>
        ))}
        <div className="add-item-div">
          <input className='input-field' type="text" placeholder="Add new item" value={newItem} onChange={handleChange} />
          <button className='add-btn' onClick={handleAddItem}>Add</button>
        </div>
      </div>
    </div>
  )
}


export default App;
