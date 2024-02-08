import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import ListComponent from "./components/List/listComponent";

const root = createRoot(document.getElementById("root"));
root.render(
    <div className="container">
        <h1 className="title">Hello From React Heroes</h1>
        <h2 className="bg-primary">Hello From React Heroes with Bootstrap</h2>
        <ListComponent />
    </div>
);
