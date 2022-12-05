import { Children } from "react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen">
      <div className=" flex h-full flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
