import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Newsletter from "./Newsletter";

export default function Footer() {
  let services = [
    "Art Curation and Exhibition",
    "NFT Release and Token Sale",
    "Blockchain and Web Development",
    "Brand Awareness and Marketing",
    "Market Research",
    "Art Style",
    "Brand Survey",
    "Community Development and Discord Management",
    "On-chain Voting Implementation",
    "Roadmaps",
  ];

  let servicesList = services.map((service, i) => (
    <li key={i}>
      {" "}
      <FontAwesomeIcon
        className="art-icon"
        icon={faCheck}
      ></FontAwesomeIcon>{" "}
      {service}
    </li>
  ));
  return (
    <footer className="website-footer">
      <div className="footer--company-intro">
        <h1>CREATH</h1>
        {/* <p>
          CREATH is a diverse team of highly skilled professionals with creative
          visualisation building a global community of creatives and elite
          collectors by forging a new model of culture and value in web3.
        </p> */}
      </div>
      <div className="footer--services">
        <h2>Services</h2>
        <ul>{servicesList}</ul>
      </div>
      <Newsletter cname="footer--newsletter" />
    </footer>
  );
}
