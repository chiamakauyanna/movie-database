import React, { Suspense } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Loading from "../common/Loader";
import { LayoutProp } from "@/interfaces/interfaces";

const Layout = ({ children }: LayoutProp) => {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <Suspense fallback={<Loading />}>
          <div>
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
