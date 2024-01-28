import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
    return (
        <div id="container">
            <Header id="header" content="This is the header" />
            <Main id="main" content="This is the main" />
            <Footer id="footer" content="This is the footer" />
        </div>
    );
}

export default App;