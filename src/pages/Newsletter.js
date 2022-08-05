import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faLinkedin,
  faInstagram,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Newsletter(props) {
  return (
    <div className={props.cname}>
      <h2>Newsletter</h2>
      <p>
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks for navigating CREATH.{" "}
      </p>
      <form
        method="post"
        action="https://sendfox.com/form/m2r4wd/m809w6"
        className="sendfox-form"
        id="m809w6"
        data-async="true"
        data-recaptcha="true"
      >
        <div className="footer--newsletter-form">
          <input
            className="subscription-input"
            type="text"
            placeholder="Email"
          ></input>
          <button className="subscription-button">Subscribe</button>
        </div>
      </form>
      <script src="https://sendfox.com/js/form.js"></script>
      <div className="footer--social-media">
        <ul>
          <li>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://discord.gg/Sqgb9hsZ5B"
            >
              <FontAwesomeIcon
                className="art-icon"
                icon={faDiscord}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://twitter.com/Creath_io"
            >
              <FontAwesomeIcon
                className="art-icon"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nonreferrer"
              href=" https://www.instagram.com/creath.io/"
            >
              <FontAwesomeIcon
                className="art-icon"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://www.linkedin.com/company/creath-io "
            >
              <FontAwesomeIcon
                className="art-icon"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://medium.com/@creathteam "
            >
              <FontAwesomeIcon
                className="art-icon"
                icon={faMedium}
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
