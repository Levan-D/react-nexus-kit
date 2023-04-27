/** @format */

import githubIcon from "../assets/github.png"
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <div className=" select-none  bg-slate-950">
      <nav className="mx-auto  max-w-6xl  px-4  ">
        <ul className=" items-center md:flex  md:justify-between">
          <li>
            <img className="logo mx-auto my-3.5 h-7" src={logo} alt="logo" />
          </li>

          <li
            className={` my-3.5 h-7 shrink-0 cursor-pointer select-none rounded-full border-2  border-transparent  duration-300   md:hover:border-white`}
          >
            <a href="https://github.com/Levan-D/react-nexus-kit" target="_blank">
              <img className="mx-auto h-6 " src={githubIcon} alt="github icon" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
