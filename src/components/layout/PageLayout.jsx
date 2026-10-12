// src/components/layout/PageLayout.jsx
import { Outlet } from "react-router-dom";
import Background from "./Background";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout() {
  return (
    <>
      <Background />
      <Navbar variant="page" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageLayout;