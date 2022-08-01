import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import appLogo from "../creath-logo.png";
import Newsletter from "./Newsletter";

export default function Navbar() {
  const navRef = useRef();
  const headerRef = useRef();
  console.log(navRef);

  const showNavbar = () => {
    headerRef.current.classList.toggle("remove-header-padding");
    navRef.current.classList.toggle("responsive_nav");
    console.log("It works");
  };

  function Nav(className) {
    return (
      <nav className={className} onClick={showNavbar}>
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
      </nav>
    );
  }

  const homelogo = (
    <Link to="/" onClick={showNavbar}>
      <img src={appLogo} className="app-logo" />
    </Link>
  );

  return (
    <>
      <header className="App-header" ref={headerRef}>
        <Link to="/">
          <img src={appLogo} className="app-logo" />
        </Link>
        {Nav("nav-menu")}

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <section className="nav-mobile-container" ref={navRef}>
          <section className="nav-mobile-menu">
            <div>
              <Link to="/" onClick={showNavbar}>
                <img src={appLogo} className="app-logo" />
              </Link>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </div>
            {Nav("mobile-nav")}
            {/* <Newsletter /> */}
          </section>
          <Newsletter cname="nav-newsletter" />
        </section>
      </header>
      <Outlet />
    </>
  );
}
