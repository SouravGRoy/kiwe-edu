// components/Layout.tsx
import React, { ReactNode } from "react";
import Footer from "./home/footer";
import Navbar from "./home/navbar";
import { NoticesFetch } from "./notices-fetch";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <NoticesFetch />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
