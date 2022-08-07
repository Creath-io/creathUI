import { ethers } from "ethers";
import "../DescriptionPage.css";
import { useParams } from "react-router-dom";
import { CONTRACT_ADDRESS, USDT, PROVIDER, TREASURY } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ERC20 from "../abis/ERC20.json";
import {
  faUser,
  faMoneyBill,
  faList,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ArtData from "../ArtData";
const TwoBrothersAndOneLumbo = require("../abis/marketplace.json");

export default function DescriptionPage() {
  const params = useParams();
  const [isSold, setIsSold] = useState(false);
  const [load, setLoad] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const artImage = ArtData.find(item => {
    return item.id == params.key
 })

  useEffect(() => {
    checkStatus();
  }, []);

  const checkIfWalletIsConnected = async () => {
    /*
    * First make sure we have access to window.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)

      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      setupEventListener()
    } else {
      console.log("No authorized account found")
    }
  }
  
  /*
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 

      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      setupEventListener()
    } catch (error) {
      console.log(error)
    }
  }

  // Setup our listener.
  const setupEventListener = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, TwoBrothersAndOneLumbo.abi, signer);

        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
        connectedContract.on("ItemSold", (id, from, price) => {
          console.log(from, id.toNumber(), price);
          alert(`Hey there! You've Purchased this Art Successfully. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: <https://opensea.io/assets/${CONTRACT_ADDRESS}/${id.toNumber()}>`)
        });

        console.log("Setup event listener!")

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const buyItemTxn = async (id, price) => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        let chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log("Connected to chain " + chainId);
  
        // String, hex code of the chainId of the Rinkebey test network
        const mainnetChainId = "0x1"; 
        if (chainId !== mainnetChainId) {
          alert("You are not connected to the Ethereum Network!");
        } else{
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const usdt = new ethers.Contract(USDT, ERC20.abi, signer);
          const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, TwoBrothersAndOneLumbo.abi, signer);
  
          console.log("Going to pop wallet now to pay gas...")
          let Txn = await usdt.approve(CONTRACT_ADDRESS,price * 1e6);
          
          Txn = await usdt.approve(TREASURY, price * 1e6);
          console.log(await signer.getAddress());
          Txn = await usdt.transfer(TREASURY,  price * 1e6);
          Txn = await connectedContract.buyItem(id);
    
          setLoad(true);
  
          console.log("Mining...please wait.")
          await Txn.wait();
          
          console.log(`Mined, see transaction: https://etherscan.io/tx/${Txn.hash}`);
          setLoad(false);
        }
  
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkStatus = async () => {
    const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      TwoBrothersAndOneLumbo.abi,
      provider
    );

    const item = await contract.isSold(params.key);
    //item ? setBuyButtonText("SOLD") : setBuyButtonText("BUY")
    setIsSold(item);
  };

  const renderNotConnectedContainer = () => (
    <button className="buy-button" onClick={connectWallet}>{"CONNECT WALLET"}</button>
  );

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div>
      <section className="container">
        <section className="description-container">
          <div className="description-image-container">
          {artImage.img.slice(-3) === "mp4" ? (
            <video className="art-video" controls loop>
              <source src={artImage.img} type="video/mp4" />
            </video>
          ) : (
            <img className="art-image" src={artImage.img} alt="burnOut" />
          )}
          </div>
          <div className="description">
            <header className="description-header">
              <h1>{artImage.title}</h1>
            </header>

            <div className="art-description-details">
              <div className="art-ownership">
                <p className="description-art-tag">
                  <FontAwesomeIcon
                    className="art-icon"
                    icon={faUser}
                  ></FontAwesomeIcon>{" "}
                  Artist
                </p>
                <p className="artist-name">{artImage.artist}</p>
              </div>
              <div className="art-ownership">
                <p className="description-art-tag">
                  <FontAwesomeIcon
                    className="art-icon"
                    icon={faMoneyBill}
                  ></FontAwesomeIcon>{" "}
                  Price
                </p>
                <p className="artist-name">{artImage.price} USDC</p>
                { currentAccount === "" ? renderNotConnectedContainer() : (load ? (
                  <button className="buy-button">{"Loading..."}</button>
                ) : isSold ? (
                  <button className="buy-button">{"SOLD"}</button>
                ) : (
                  <button
                    className="buy-button"
                    onClick={() => buyItemTxn(params.key, artImage.price)}
                  >
                    {"BUY"}
                  </button>
                )) }
              </div>

              <div className="art-contract-details">
                <h1>
                  <FontAwesomeIcon
                    className="details-icon"
                    icon={faList}
                  ></FontAwesomeIcon>
                  {"   "}
                  Details
                </h1>
              </div>
            </div>
          </div>
          <div className="art-description-story">
            <h1 className="art-story-heading">
              <FontAwesomeIcon
                className="details-icon"
                icon={faFeather}
              ></FontAwesomeIcon>{" "}
              Description
            </h1>
            <p className="art-description">{artImage.description}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
