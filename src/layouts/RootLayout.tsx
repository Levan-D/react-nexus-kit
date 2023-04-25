/** @format */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen  flex-col">
      <Navbar />

      <main className="mx-auto min-w-full max-w-6xl grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
