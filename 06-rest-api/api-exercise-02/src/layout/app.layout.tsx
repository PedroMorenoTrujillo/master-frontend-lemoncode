import { PropsWithChildren } from 'react';
import './app.layout.scss';

export const AppLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="app-layout">
            {children}
        </div>
    );
}

export default AppLayout;