import { PropsWithChildren } from "react";
import './list.scene.layout.scss';
export const ListSceneLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="list-scene-layout">{children}</div>
}