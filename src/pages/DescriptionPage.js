import "../DescriptionPage.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyBill,
  faList,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function DescriptionPage(props) {
  return (
    <div>
      <section className="container">
        <section className="description-container">
          <div className="description-image-container">
            <img src={`.${props.artImage}`} className="description-image" />
          </div>
          <div className="description">
            <header className="description-header">
              <h1>{props.title}</h1>
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
                <p className="artist-name">{props.artist}</p>
              </div>
              <div className="art-ownership">
                <p className="description-art-tag">
                  <FontAwesomeIcon
                    className="art-icon"
                    icon={faMoneyBill}
                  ></FontAwesomeIcon>{" "}
                  Price
                </p>
                <p className="artist-name">{props.price} USDT</p>
                <button className="buy-button" onClick={""}>
                  Buy{" "}
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
            <p className="art-description">{props.description}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
