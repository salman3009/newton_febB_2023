import React from "react";


function Profile(props){
    console.log("Profile component");
    return (<div>
        <button onClick={props.click}>Click on Salary Profile</button>
    </div>)
}

export default React.memo(Profile);