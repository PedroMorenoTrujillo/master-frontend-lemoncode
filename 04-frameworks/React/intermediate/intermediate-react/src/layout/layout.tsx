import { PropsWithChildren } from "react";
import { Header } from "./header";
import { Navbar } from "./navbar";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      {children}
    </div>
  );
};
