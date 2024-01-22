"use client";
import { useState } from "react";
import menuItems from "../../data/menuItems";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md text-white bg-violet-100 dark:bg-gray-900">
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center text-center">
            <div className="flex-shrink-0">
              <a href="saymon.vercel.app" className="flex items-center gap-2">
                <img src="/assets/img/Saymon Hwaier Logo.webp" alt="Saymon Hwaier Portfolio Logo" width={50}/>
                <h1 className="text-xl font-bold text-slate-950 dark:text-slate-50">Saymon Hwaier</h1>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a key={item.id} href={item.link} className="hover:text-indigo-500 text-slate-950 dark:text-slate-50 px-3 py-2 rounded-md text-sm font-medium">
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-violet-100 dark:hover:bg-slate-900 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6 text-slate-950 dark:text-slate-50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a key={item.id} href={item.link} className="hover:text-indigo-500 text-slate-950 dark:text-slate-50 block px-3 py-2 rounded-md text-base font-medium">
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
