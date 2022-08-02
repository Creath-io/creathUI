import {ethers} from "ethers";
import "../DescriptionPage.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import TwoBrothersAndOneLumbo from "../abis/marketplace.json";
import {
  faUser,
  faMoneyBill,
  faList,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react'
import Web3Modal from 'web3modal';

export default function DescriptionPage() {
  const params = useParams();
  const [buyButtonText, setBuyButtonText] = useState("Buy");
  const marketplaceAddr = "0x726f3fbcecB7d08de69C899082E5D747111e6172";
  const [art, setArt] = useState({});
  useEffect(() => {
    loadNFT()
  }, [])
  async function loadNFT() {
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = new ethers.Contract(marketplaceAddr, TwoBrothersAndOneLumbo.abi, provider)
    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const tokenUri = await contract.tokenURI(params.key);
    const meta = await axios.get(tokenUri)
    let price = ethers.utils.formatUnits(meta.data.price.toString(), 'ether')
    let item = {
      price,
      artist: meta.data.artist,
      img: meta.data.img,
      title: meta.data.title,
      description: meta.data.description
    }
    setArt(item);
  }

  async function buyItem(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(marketplaceAddr, TwoBrothersAndOneLumbo.abi, signer)
  
    const transaction = await contract.buyItem(nft)
    await transaction.wait()
    setBuyButtonText("SOLD")
    loadNFT()
  }

  return (
    <div>
      <section className="container">
        <section className="description-container">
          <div className="description-image-container">
            <img src={`${art.img}`} className="description-image" alt=""/>
          </div>
          <div className="description">
            <header className="description-header">
              <h1>{art.title}</h1>
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
                <p className="artist-name">{art.artist}</p>
              </div>
              <div className="art-ownership">
                <p className="description-art-tag">
                  <FontAwesomeIcon
                    className="art-icon"
                    icon={faMoneyBill}
                  ></FontAwesomeIcon>{" "}
                  Price
                </p>
                <p className="artist-name">{art.price} USDT</p>
                <button className="buy-button" onClick={() => buyItem(params.key)}>
                  {buyButtonText}
                </button>
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
              The Story
            </h1>
            <p className="art-description">{art.description}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
