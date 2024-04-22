import { PropsWithChildren } from "react";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default MainLayout;
