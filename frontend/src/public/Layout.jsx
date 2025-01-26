import React from 'react';
import { Link, Outlet } from 'react-router';

function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center p-4 bg-blue-700 text-white shadow-lg rounded-b-lg">
        <div className="flex items-center gap-10">
          <h2 className="text-2xl font-bold tracking-wide">Logo</h2>
          <nav>
            {/* Future Navigation Menu */}
            {/* <ul className="flex gap-7 text-sm font-medium">
              <li className="relative group">
                <a href="#" className="flex items-center gap-2 hover:text-blue-300">
                  Wedding Loans <span>&#x25BC;</span>
                </a>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-md rounded-md mt-2 py-2 w-40">
                  <li className="px-4 py-2 hover:bg-gray-100">Valima</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Furniture</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Valima Food</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Jahez</li>
                </ul>
              </li>
            </ul> */}
          </nav>
        </div>

        <div>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Sign In
          </Link>
        </div>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;