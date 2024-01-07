import React from "react";

function Users({ isLoading, items }) {

    if (isLoading) {
        return <div id="loading">Loading..</div>;
    } else {
        return <div>
           {
            items.map((obj)=>{
                return (<div class="user">{obj}</div>)
            })
           }
        </div>;
    }

}

export default Users;