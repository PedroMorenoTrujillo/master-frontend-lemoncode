import { PropsWithChildren } from "react";
import "./main.layout.scss";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="main-layout">{children}</div>;
};
