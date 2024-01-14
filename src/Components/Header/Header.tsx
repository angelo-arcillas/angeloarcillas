import { useState } from 'react';
import Avatar from './../../assets/me.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  return (
    <header className=" bg-white border-gray-200 px-4 md:px-6 py-2.5 dark:bg-gray-800 dark:text-white">
      <div className="mx-auto max-w-screen-2xl">
        <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <NavLink to="/" className="flex items-center">
              <img
                src={Avatar}
                alt="Website Logo"
                loading='lazy'
                className="h-6 mr-3 rounded-full sm:h-9"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Angelo Arcillas
              </span>
            </NavLink>
            <div className="flex items-center md:order-2">
              <NavLink
                to="/login"
                className="hidden md:block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </NavLink>
              <button
                onClick={() => setIsShowMenu(!isShowMenu)}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`
              ${isShowMenu ? 'flex' : 'hidden md:flex'}
               items-center justify-between w-full md:w-auto md:order-1`}
            >
              <ul className="flex flex-col w-full mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/articles"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Articles
                  </NavLink>
                </li>

                <li>
                  <a
                    href="mailto:angeloarcillas64@gmail.com"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <NavLink
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 md:hidden hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
