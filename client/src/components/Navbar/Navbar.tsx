import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelpModal from '../Modal/HelpModal/HelpModal';
import StatsModal from '../Modal/StatsModal/StatsModal';
type Props = {};

const Navbar = (props: Props) => {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const openHelpModal = () => setIsHelpOpen(true);
  const openStatsModal = () => setIsStatsOpen(true);
  return (
    <>
      <nav className="p-2 bg-slate-900  border-b border-slate-50/[0.06] text-white">
        <div className="flex justify-between  items-center mx-auto">
          <ul className="flex gap-2 items-center">
            <li>
              <button className="p-2" onClick={openHelpModal}>
                <i
                  className="fa-light fa-circle-question fa-lg"
                  onClick={openHelpModal}
                ></i>
              </button>
            </li>
            <li>
              <Link to="/archive" className="p-2">
                <i className="fa-regular fa-box-archive fa-lg"></i>
              </Link>
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
              <button className="p-2" onClick={openHelpModal}>
                <i
                  className="fa-solid fa-signal-bars-good fa-lg"
                  onClick={openHelpModal}
                ></i>
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
