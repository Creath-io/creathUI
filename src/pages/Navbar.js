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

  // //check if wallet is connected
  // const [walletConnected, setWalletConnected] = useState(false);

  // //set wallet address
  // const [walletAddress, setWalletAddress] = useState("");

  // //set wallet button display message
  // const walletMessage = walletConnected
  //   ? `Wallet Address: ${walletAddress}`
  //   : "Connect Wallet";

  // async function handleConnectWallet() {
  //   console.log("Requesting account...");

  //   if (window.ethereum) {
  //     console.log(window.ethereum);
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setWalletAddress(accounts[0]);
  //       setWalletConnected(true);
  //     } catch (error) {
  //       alert("Error connecting. Please, try again.");
  //     }
  //   } else {
  //     alert(
  //       "Meta Mask doesn't exist on this browser. Install Meta Mask to continue"
  //     );
  //   }
  // }

  // async function connectWallet() {
  //   if (typeof window.ethereum !== "undefined") {
  //     await handleConnectWallet();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   }
  // }
  return (
    <>
      <header className="App-header" ref={headerRef}>
        <div className="header-nav">
          <Link to="/">
            <img src={appLogo} className="app-logo" />
          </Link>
          {Nav("nav-menu")}

          {/* <button
            className="metamask-wallet-button"
            onClick={handleConnectWallet}
          >
            {walletMessage}
          </button> */}

          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
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
          </section>
          <Newsletter cname="nav-newsletter" />
        </section>
      </header>
      <Outlet />
    </>
  );
}
