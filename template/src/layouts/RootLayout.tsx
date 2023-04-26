/** @format */

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="flex min-h-screen  flex-col bg-slate-900 text-white md:[background:radial-gradient(ellipse_at_50%_50%,_rgba(15,_23,_42,_1)_10%,rgba(2,_6,_23,_1)_60%)]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl grow p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
