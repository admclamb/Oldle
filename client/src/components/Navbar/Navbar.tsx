import React from 'react';
import { Link } from 'react-router-dom';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="p-2 bg-slate-900  border-b border-slate-50/[0.06] text-white">
      <div className="flex justify-between  items-center mx-auto">
        <ul className="flex gap-2 items-center">
          <li>
            <button className="p-2">
              <i className="fa-light fa-circle-question fa-lg"></i>
            </button>
          </li>
          <li>
            <button className="p-2">
              <i className="fa-regular fa-box-archive fa-lg"></i>
            </button>
          </li>
        </ul>
        <Link to="/">
          <h1 className="text-2xl font-semibold">OLDLE</h1>
        </Link>
        <ul className="flex gap-2">
          <li>
            <button className="p-2">
              <i className="fa-regular fa-brightness fa-lg"></i>
            </button>
          </li>
          <li>
            <button className="p-2">
              <i className="fa-solid fa-signal-bars-good fa-lg"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
