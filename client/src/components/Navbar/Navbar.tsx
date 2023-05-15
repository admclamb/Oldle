import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelpModal from "../Modal/HelpModal/HelpModal";
import StatsModal from "../Modal/StatsModal/StatsModal";
type Props = {};

const Navbar = (props: Props) => {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const openHelpModal = () => setIsHelpOpen(true);
  const openStatsModal = () => setIsStatsOpen(true);
  return (
    <>
      <nav className="p-2 bg-slate-900 border-b border-slate-50/[0.06] text-white">
        <div className="container flex items-center mx-auto">
          <ul className="flex gap-2 items-center basis-1/3 justify-self-start">
            <li>
              <button className="p-2" onClick={openHelpModal}>
                Help
              </button>
            </li>
            <li>
              <Link to="/archive" className="p-2">
                Archive
              </Link>
            </li>
          </ul>
          <Link to="/" className="basis-1/3 justify-self-center">
            <h1 className="text-2xl font-semibold text-center">OLDLE</h1>
          </Link>
          <ul className="flex gap-2 items-center basis-1/3 justify-end justify-self-end">
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <button className="p-2">Dark</button>
            </li>
            <li>
              <button className="p-2" onClick={openHelpModal}>
                Stats
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <HelpModal isHelpOpen={isHelpOpen} setIsHelpOpen={setIsHelpOpen} />
      <StatsModal isStatsOpen={isStatsOpen} setIsStatsOpen={setIsStatsOpen} />
    </>
  );
};

export default Navbar;
