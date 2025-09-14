import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";


const chai = (props) => {
console.log(props);
    return React.createElement("div", {}, [
        React.createElement("p", {}, props.name),
        React.createElement("h1", {}, props.cost)
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "variation of chai"),
        React.createElement(chai, {
            name: "masala chai",
            cost: "150"
        }),
        React.createElement(chai, {
            name: "Ginger Chai",
            cost: "1000",
        }),
        React.createElement(chai, {
            name: "Lemon Tea",
            cost: "1000",
        })
    ])
}