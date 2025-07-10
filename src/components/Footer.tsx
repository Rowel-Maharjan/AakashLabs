import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts, footerServices, socialLinks } from "../config";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto max-w-[1200px] px-5 pt-14 md:px-6">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="mb-10 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/3">
            <h3 className="mb-6 border-b-2 border-gray-700 pb-8 text-2xl font-semibold text-white">
              About Company
            </h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              We turn ideas into high-performing websites and web applications
              that help businesses thrive in the digital world. Whether you're
              launching a startup, scaling an enterprise, or transforming your
              brand online — we've got the skills to bring your vision to life.
            </p>
          </div>

          <div className="mb-10 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/3">
            <h3 className="mb-6 border-b-2 border-gray-700 pb-8 text-2xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="ml-3 space-y-1 text-gray-400">
              {footerServices.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/3">
            <h3 className="mb-6 border-b-2 border-gray-700 pb-8 text-2xl font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-6 text-gray-400">
              {contacts.map((contact) => (
                <li key={contact.title} className="flex items-start gap-4">
                  <contact.Icon className="text-orange-500" />
                  <div>
                    <h4 className="mb-1 font-semibold text-white">
                      {contact.title}
                    </h4>
                    <a
                      href={contact.href}
                      target="_blank"
                      className="hover:text-white"
                    >
                      {contact.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-gray-700 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between px-5 sm:flex-row">
          <ul className="flex space-x-3 text-gray-400">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  className="inline-block h-10 w-10 rounded bg-gray-700 text-center leading-10 transition hover:bg-orange-500 hover:text-white"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-gray-400 sm:mt-0">
            &copy; AakashLabs | Designed & Developed By{" "}
            <a
              href="https://www.rowelmaharjan.com.np/"
              target="_blank"
              className="font-bold text-gray-300 transition hover:text-orange-500"
            >
              Rowel Maharjan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
