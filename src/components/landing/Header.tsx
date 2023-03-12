import { useState } from "react";
import Link from "next/link";
import {
  CloseIcon,
  DiscordIcon,
  HambergerIcon,
  MagicEdenIcon,
  TwitterIcon,
} from "../svgIcons";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-bar">
      <div className="container nav-style">
        <div className="logo">
          {/* eslint-disable-next-line */}
          <img src="/image/logo.png" alt="logo" className="logo-img" />
          <p className="logo-text">Lost Dog Society</p>
        </div>
        <div className="logo-link">
          <ul className="desktop-menu">
            <li>
              <Link href="">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="#mint">
                <a>MINT</a>
              </Link>
            </li>
            <li>
              <Link href="#team">
                <a>TEAM</a>
              </Link>
            </li>
            <li>
              <Link href="#FAQ">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
          <div className="logo-network">
            <DiscordIcon />
            <TwitterIcon />
            <MagicEdenIcon />
          </div>
          <div className="hamberger">
            <button onClick={() => setOpen(!open)}>
              {!open ? <HambergerIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="mobile-header">
          <ul className="mobile-menu">
            <li onClick={() => setOpen(false)}>
              <Link href="">
                <a>HOME</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#mint">
                <a>MINT</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#team">
                <a>TEAM</a>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#FAQ">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
