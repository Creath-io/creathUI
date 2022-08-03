import {ethers} from "ethers";
import "../DescriptionPage.css";
import { useParams } from "react-router-dom";
import {
  CONTRACT_ADDRESS,
  PROVIDER } from "../constants"
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
var base64 = require('base-64');

export default function DescriptionPage() {
  const params = useParams();
  const [buyButtonText, setBuyButtonText] = useState("Buy");
  const [art, setArt] = useState("");

    useEffect(()=> {
      fetchMetadata()
    },[])
    const fetchMetadata = async() => {
      console.log("fetching nft");
      const provider = new ethers.providers.JsonRpcProvider(PROVIDER)
      const contract = new ethers.Contract(CONTRACT_ADDRESS, TwoBrothersAndOneLumbo.abi, provider)

      const tokenUri = await contract.tokenURI(params.key);
      const json = base64.decode(tokenUri.substring(29))
      const meta = JSON.parse(json)
      setArt({
        price: meta.price,
        artist: meta.artist,
        img: meta.img,
        title: meta.title,
        description: meta.description
      })
    }
    fetchMetadata()
  

  async function buyItem(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TwoBrothersAndOneLumbo.abi, signer)
  
    const transaction = await contract.buyItem(nft)
    await transaction.wait()
    setBuyButtonText("SOLD")
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
