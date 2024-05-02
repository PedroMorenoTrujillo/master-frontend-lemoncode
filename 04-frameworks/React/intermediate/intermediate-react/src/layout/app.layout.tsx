import { PropsWithChildren } from "react";
import { Header } from "./header";
import { Navbar } from "./navbar";
import './app.layout.scss';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <Navbar />
      {children}
    </div>
  );
};
