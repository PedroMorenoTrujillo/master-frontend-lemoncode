import { PropsWithChildren } from "react";
import "./cart.layout.scss";

export const CartLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="cart-layout">{children}</div>;
};
