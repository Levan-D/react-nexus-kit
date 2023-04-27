/** @format */

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="gradient-animation flex  min-h-screen flex-col bg-slate-900 text-white">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl grow p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
