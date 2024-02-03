import React from "react";
import ReactDom from "react-dom/client";
import Body from "./components/Body";

const title = React.createElement("h1", {}, "Hello world!!");
console.log("title", title);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<body />);
