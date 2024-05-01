import React from "react";
import "./App.css";
import { Layout } from "./layout";
import { Cart } from "./scenes";
import { PictureProvider } from "./core/Picture";
import { RouterComponent } from "./core/router";
import { BrowserRouter as Router } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <PictureProvider>
      <Router>
        <Layout>
          <div>
            <RouterComponent />
            <Cart />
          </div>
        </Layout>
      </Router>
    </PictureProvider>
  );
};

export default App;
