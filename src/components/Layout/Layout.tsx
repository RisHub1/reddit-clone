import React from "react";
import Navbar from "../Navbar/Navbar";

//Looks like this interface wasn't needed in the original tutorial
interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
export default Layout;