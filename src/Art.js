import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Art(props) {
  const mediaFile =
    props.artImage.substr(-3) === "mp4" ? (
      <video className="art-video" autoPlay={true} muted playsInline>
        <source src={props.artImage} type="video/mp4" />
      </video>
    ) : (
      <img className="art-image" src={props.artImage} alt="burnOut" />
    );

  const webpath = `/marketplace/${props.id}`;

  return (
    <div className="art">
      <div className="art-image-container">
        <Link to={webpath}>{mediaFile}</Link>
      </div>
      <div className="art-details">
        <div className="art-title">
          <h2>{props.title}</h2>
          <p className="art-tag art-style">
            <FontAwesomeIcon
              className="art-icon"
              icon={faTag}
            ></FontAwesomeIcon>{" "}
            Style
          </p>
          <p className="art-price">{props.style}</p>
        </div>

        <div className="art-artist-details">
          <p className="art-tag">
            <FontAwesomeIcon
              className="art-icon"
              icon={faUser}
            ></FontAwesomeIcon>{" "}
            Artist
          </p>
          <p className="artist-name">{props.artist}</p>
        </div>
        <div className="price">
          <p className="art-tag">
            <FontAwesomeIcon
              className="art-icon"
              icon={faMoneyBill}
            ></FontAwesomeIcon>{" "}
            Price
          </p>
          <p className="art-price">{props.price} USDT</p>
        </div>
      </div>
    </div>
  );
}
