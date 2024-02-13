'use client';
import React, { useReducer } from 'react';

export default function Home() {

  const intialTaskState = { count: 0 };


  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { count: state.count + 1 }
      case 'delete':
        return { count: state.count>0?state.count-1:0}
      case 'deleteAll':
        return { count: 0 }
    }
  
  }

  const [taskState, dispatch] = useReducer(reducer, intialTaskState);
  
  return (
    <div id='main'>
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({ type: 'add' })} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({ type: 'delete' })} id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({ type: 'deleteAll' })} id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>

    </div>
  );
}
