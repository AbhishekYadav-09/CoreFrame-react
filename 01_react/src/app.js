import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const chai = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "masala chai"),
        React.createElement("p", {}, "Ginger Chai")
    ])
};

const App = () =>{
    return  React.createElement("div", {} , [
        React.createElement(chai),
        React.createElement(chai),
        React.createElement(chai),
        React.createElement(chai),
    ])
};

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
