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

  const onActivehandler=(index)=>{
           setActiveCategory(index);
  }

  const onChangeHandler=(event)=>{
        setNewItem(event.target.value);
  }

  const onAddHandler=()=>{
    let newCategory = [...categories];
    newCategory[activeCategory].items.push(newItem);
    setCategories(newCategory);
    setNewItem("");
  }

  return (
    <div id="main">
      <h1>Shopping List</h1>
      <div className="categories">
          {categories.map((obj,index)=>{
                return (<div key={index} onClick={()=>onActivehandler(index)} className={`category`}>
                        {obj.name}
          </div>)
          })}
      </div>
      <div className="items">
         {categories[activeCategory].items.map((obj,index)=>{
                    return (<div key={index} className="item">{obj}</div>)
         })} 
        <div className="add-item-div">
          <input className='input-field' type="text" value={newItem} placeholder="Add new item" onChange={onChangeHandler} />
          <button className='add-btn' onClick={onAddHandler}>Add</button>
        </div>
      </div>
    </div>
  )
}


export default App;
    