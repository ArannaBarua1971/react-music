import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const nav = [
    {
      path: "/",
      element: "Discover",
    },
    {
      path: "/search",
      element: "Search",
    },
    {
      path: "/around_you",
      element: "Around You",
    },
    {
      path: "/top_artists",
      element: "Top Artists",
    },
    {
      path: "/top_charts",
      element: "Top Charts",
    },
  ];
  const [showSidbar,setShowSidebar]=useState(false)
  return (
    <div className="relative z-10 ">
      <button
        
        type="button"
        onClick={(e)=> setShowSidebar(pre=>!pre)}
        className="fixed right-0 top-0 m-4 md:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 lg:w-64 md:w-[14rem] w-[15rem] h-screen transition-transform md:translate-x-0   ${showSidbar ? "translate-x-0":"-translate-x-full"} `}
        aria-label="Sidebar"
      >
        <div className="h-full py-3 px-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium mt-7">
            {nav.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      isActive ? "bg-gray-200 dark:bg-gray-900" : ""
                    }`
                  }
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">{item.element}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
