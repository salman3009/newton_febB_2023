import React from "react";


function List(props){
    console.log("List component");

    return (<div>
      <h1>Count:{props.count}</h1>
    </div>)
}

export default React.memo(List);