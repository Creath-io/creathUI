import {ethers} from "ethers";
import { useEffect, useState } from 'react'
import axios from 'axios';
import TwoBrothersAndOneLumbo from "../abis/marketplace.json";
import Art from "../Art";


export default function Marketplace() {
  const marketplaceAddr = "0x726f3fbcecB7d08de69C899082E5D747111e6172";
  const [artGallery, setArtGallery] = useState([])
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = new ethers.Contract(marketplaceAddr, TwoBrothersAndOneLumbo.abi, provider)
    const data = await contract.fetchMarketItems()

    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await contract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        id: i.tokenId.toNumber(),
        artist: meta.data.artist,
        img: meta.data.img,
        title: meta.data.title,
        style: meta.data.style,
        url: meta.data.style
      }
      return item
    }))
    setArtGallery(items)
  }
  const gallery = artGallery.map((art) => (
    <Art
      title={art.title}
      artist={art.artist}
      price={art.price}
      artImage={art.img}
      style={art.style}
      key={art.id}
      urlPath={art.url}
    />
  ));
  return (
    <div>
      {/* <Link to="/">Home</Link> */}
      <header className="gallery-header">
        <h1>Marketplace</h1>
        <div>
          <p>
            TWO BROTHERS AND ONE LUMBO brings together a selection of works that
            tackle the socio-political landscape of Nigeria thus generating a
            visual representation of the numerous opinions and questions
            presented at a critical period such as this in our country’s
            framework. It explores the use of satire as a literary device to
            concretize the mental picture of where we stand as a nation albeit
            the future expectations from the forthcoming elections.
          </p>

          <p>
            It marries the display of art in a traditional gallery setting with
            the fast evolving technology of Art NFT and how it is displayed and
            interacted with as different methods of expression. This union is
            the crux of the exhibition. Which is why all the traditionally
            created NFTs being exhibited will come with the original physical
            versions when they’re collected.
          </p>

          <p>
            This births the question of how Art and Technology can be used as
            effective tools of influencing social/political change in such an
            environment as Nigeria where technology and art are still mostly
            dealt the unimportant hand.
          </p>
        </div>
      </header>
      <section className="app-container">
        <div className="gallery-container">
          <div className="gallery">{gallery}</div>
        </div>
      </section>
    </div>
  );
}
