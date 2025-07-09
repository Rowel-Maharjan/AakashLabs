import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navbarItems, socialLinks } from "../../config";
import { PATHNAME } from "../../pathname";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full">
      <div
        id="header-sticky"
        className="fixed z-50 mx-auto w-full bg-white px-4 shadow-md sm:px-6"
      >
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between">
          <a href={PATHNAME.home}>
            <h1 className="text-2xl font-bold text-blue-600">AakashLabs</h1>
          </a>

          <nav className="hidden justify-center lg:flex lg:flex-1">
            <ul className="flex space-x-10 text-base font-medium text-gray-800">
              {navbarItems.map((item) => {
                return (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className={`relative inline-flex items-center gap-1 px-1 py-1 font-[550] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ul className="hidden space-x-3 lg:flex">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  target="_blank"
                  href={link.href}
                  className="flex h-9 w-9 items-center justify-center rounded bg-[#f8f4ef] text-center leading-8 text-gray-600 transition hover:bg-yellow-400"
                >
                  <FontAwesomeIcon icon={link.icon} className="text-sm" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="block text-gray-800 focus:outline-none lg:hidden"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faTimes : faBars}
              className="text-lg"
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 bg-white px-6 py-6 shadow-lg lg:hidden">
          <ul className="space-y-4 text-base font-medium text-gray-800">
            {navbarItems.map((item) => {
              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className={`block py-2 hover:text-orange-500`}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="mt-6 flex space-x-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  className="inline-block h-8 w-8 rounded bg-yellow-400 text-center leading-8 transition"
                >
                  <FontAwesomeIcon icon={link.icon} className="text-sm" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export { Navbar };
