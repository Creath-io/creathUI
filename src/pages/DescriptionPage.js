import { ethers } from "ethers";
import "../DescriptionPage.css";
import { useParams } from "react-router-dom";
import { CONTRACT_ADDRESS, USDT, PROVIDER } from "../constants";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwoBrothersAndOneLumbo from "../abis/marketplace.json";
import ERC20 from "../abis/ERC20.json";
import {
  faUser,
  faMoneyBill,
  faList,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ArtData from "../ArtData";
var base64 = require("base-64");

export default function DescriptionPage() {
  const params = useParams();
  const [isSold, setIsSold] = useState(false);
  const [load, setLoad] = useState(false);
  const artImage = ArtData.find(item => {
    return item.id == params.key
 })
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "5bb80a78a3b74311859498fa0472f24f",
      },
    },
  };
  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "dark",
    cacheProvider: true,
    providerOptions,
  });

  useEffect(() => {
    checkStatus();
  }, []);


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

  async function buyItem(id, price) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      TwoBrothersAndOneLumbo.abi,
      signer
    );
    const usdt = new ethers.Contract(USDT, ERC20.abi, signer);
    await usdt.approve(CONTRACT_ADDRESS, ethers.utils.parseUnits(price.toString()));
    setLoad(true);
    const transaction = await contract.buyItem(id);
    await transaction.wait();
    setLoad(false);
  }

  return (
    <div>
      <section className="container">
        <section className="description-container">
          <div className="description-image-container">
            <img src={`${artImage.img}`} className="description-image" alt="" />
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
                <p className="artist-name">{artImage.price} USDT</p>
                {load ? (
                  <button className="buy-button">{"Loading..."}</button>
                ) : isSold ? (
                  <button className="buy-button">{"SOLD"}</button>
                ) : (
                  <button
                    className="buy-button"
                    onClick={() => buyItem(params.key, artImage.price)}
                  >
                    {"BUY"}
                  </button>
                )}
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
