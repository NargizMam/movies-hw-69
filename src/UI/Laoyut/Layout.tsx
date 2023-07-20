import React from 'react';
import Toolbar from "../../components/Toolbar/Toolbar";
import Search from "../../components/Search/Search";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <header>
                <Toolbar/>
            </header>
            <Search/>
            <main className="container-fluid">
                {children}
            </main>
        </>
    );
};

export default Layout;