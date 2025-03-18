import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../componest";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
