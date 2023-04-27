/** @format */

import { Helmet } from "react-helmet"
import logo from "../../assets/logo.png"

export default function Home() {
  const modules = [
    { name: "Vite", link: "https://vitejs.dev/" },
    { name: "React", link: "https://react.dev/" },
    { name: "TS", link: "https://www.typescriptlang.org/" },
    { name: "RTK", link: "https://redux-toolkit.js.org/" },
    { name: "RRD", link: "https://reactrouter.com/en/main" },
    { name: "Tailwind", link: "https://tailwindcss.com/" },
    { name: "Axios", link: "https://axios-http.com/docs/intro" },
    { name: "Helmet", link: "https://www.npmjs.com/package/react-helmet" },
  ]
  return (
    <div>
      <Helmet>
        <title>React Nexus Kit</title>
        <meta name="description" content="Your description here" />

        <meta name="keywords" content="Your keywords here" />

        <meta property="og:title" content="Title for open graph" />
        <meta property="og:description" content="Description for open graph" />
        <meta property="og:image" content="Absolute link for your open graph image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="absolute url of this page for your open graph" />
      </Helmet>

      <div>
        <div className="mx-auto mt-8 w-fit md:mt-20">
          <a href="https://github.com/Levan-D/react-nexus-kit" target="_blank">
            <img
              src={logo}
              alt="logo"
              className="logo cursor-pointer filter duration-300  "
            />
          </a>
        </div>
        <div className="mx-auto max-w-xl md:mt-12">
          <h1 className="mb-4 text-center text-4xl font-bold text-slate-200">
            React Nexus Kit
          </h1>
          <p className=" text-center font-bold text-slate-300">
            RNK combines multiple react packages that synergize well & has basic
            boilerplate code prewritten to allow you to hit the ground running!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:mt-16">
            {modules.map((module, i) => (
              <a key={i} href={module.link} target="_blank">
                <div className="cursor-pointer select-none rounded-md border-2 border-[#27E1C1] px-4 duration-300 md:hover:border-[#ce27e1]  md:hover:shadow-[0px_0px_10px_4px_rgba(39,225,193,1)]">
                  {module.name}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 w-fit md:mt-28">
          <p className="text-center text-sm text-slate-300">
            Edit the Home.tsx file in ".src/features/home/Home.tsx" to begin.
          </p>
          <p className="mt-2 text-center text-sm text-slate-500">
            Click on RNK logo or package buttons for docs.
          </p>
        </div>
      </div>
    </div>
  )
}
