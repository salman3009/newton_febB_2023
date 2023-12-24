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

  return (
    <div id="main">
      <h1>Shopping List</h1>
      <div className="categories">
          {categories.map((obj,index)=>{
                return (<div key={index} className={`category`}>
                        {obj.name}
          </div>)
          })}
      </div>
      <div className="items">
          {/* List items should be displayed using the below HTML */}
          <div className="item">item name</div>

        <div className="add-item-div">
          <input className='input-field' type="text" placeholder="Add new item" />
          <button className='add-btn'>Add</button>
        </div>
      </div>
    </div>
  )
}


export default App;
