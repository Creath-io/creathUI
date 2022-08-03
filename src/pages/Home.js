import SendfoxSignup from "./SendfoxSignup";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home">
        <div className="home--hero">
          <div className="hero--copy">
            <h1 className="hero--heading">Creativity x Innovation</h1>
            <p className="hero--paragraph">
              CREATH is a diverse team of highly skilled professionals with
              creative visualisation building a global community of artists and
              elite collectors by forging a new model of culture and value in
              web3.
            </p>
          </div>
        </div>
        <div className="home--section-container">
          <div className="home--section">
            {/* <img
              className="home--about-image"
              src="./images/square/The Original Gangster.jpg"
              alt="what we do"
            /> */}
            <div>
              <h2>What we do...</h2>
              <p>
                We are partnering with top artists and brands to create
                collections of limited edition and high quality art by curating
                projects and exclusive works from today’s most innovative and
                contemporary artists which includes Painters, Sculptors,
                Creative Photographers and Digital Artists.
              </p>
            </div>
          </div>
          <div className="golden--ticket--section">
            <div className="golden--ticket--container">
              <video
                loop
                className="golden-ticket"
                autoPlay={true}
                muted
                playsInline
                style={{ width: "100%" }}
              >
                <source src="./images/Golden ticket.mp4" type="video/mp4" />
              </video>
              <div className="golden-ticket-words">
                <h2>The Golden Ticket</h2>
                <br></br>
                <p>
                  The Golden Ticket is the official mint pass and your ticket to
                  all future web3 projects of Creath including Whitelists for
                  exclusive NFT drops, Artist releases, access to exhibitions,
                  real world events and in the metaverse . Guaranteed access to
                  our drops and exclusive access to our artists. For collectors
                  of contemporary art, both digital and physical
                </p>
                <br></br>
                <p>
                  The trusted and curated source for leading contemporary
                  artists looking to explore digital as a new medium.
                </p>
                <br></br>
                <p>
                  <strong>MINT QUANTITY: 1000 Tokens</strong>
                </p>
                <p>
                  <strong>MINT DATE: TBA</strong>
                </p>
                <br></br>
                <p>Sign up for a whitelist spot</p>
                <SendfoxSignup />{" "}
              </div>
            </div>
          </div>

          <div className="home--section">
            {/* <img
              className="home--about-image"
              src="./images/square/Gas fee.jpg"
              alt="what we do"
            /> */}
            <div>
              <h2>Where Digital Meets Physical</h2>
              <p>
                We provide our collectors the original physical art of the NFTs
                purchased on our platform signed by the artist and we also
                digitise physical artworks into Non Fungible Tokens on the
                Blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
