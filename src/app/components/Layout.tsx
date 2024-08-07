// components/Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./home/navbar";
import Footer from "./home/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
