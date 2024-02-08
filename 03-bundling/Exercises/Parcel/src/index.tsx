import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import ListComponent from "./components/List/listComponent";

//No funciona esta parte ???? error en el createRoot
// const root = createRoot.(document.getElementById('root'));
// root.render(
//     <div className="container">
//         <h1 className="title">Hello From React Heroes</h1>
//         {/* <ListComponent /> */}
//     </div>
// )

ReactDOM.render(
  <div className="container">
    <h1 className="title">Hello From React Heroes</h1>
    <ListComponent />
  </div>,
  document.getElementById("root")
);
