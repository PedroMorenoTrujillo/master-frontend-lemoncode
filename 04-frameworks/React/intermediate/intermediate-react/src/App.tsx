import React from "react";
import { AppLayout, MainLayout } from "./layout";
import { Cart } from "./scenes";
import { PictureProvider } from "./core/Picture";
import { RouterComponent } from "./core/router";
import { BrowserRouter as Router} from "react-router-dom";

export const App: React.FC = () => {
  return (
    <PictureProvider>
      <Router>
        <AppLayout>
          <MainLayout>
            <RouterComponent />
            <Cart />
          </MainLayout>
        </AppLayout>
      </Router>
    </PictureProvider>
  );
};

export default App;
