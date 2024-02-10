import ReactDOM from "react-dom";

export function Product(){
    return ReactDOM.createPortal(<h1>Portal Demo</h1>,document.getElementById("portal"));
}