import React from "react";
import Navbar from "../components/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
  mainClass: string;
};

const Layout = ({ children, mainClass }: Props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={`min-h-screen ${mainClass}`}>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  mainClass: "",
};

export default Layout;
