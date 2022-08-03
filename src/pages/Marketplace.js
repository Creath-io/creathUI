import Art from "../Art";
import artData from "../ArtData"


const Marketplace = () => {
    const items = artData.map( art => {
      let item = {
        tokenId: art.id,
        title: art.title,
        artist: art.artist,
        price: art.price,
        artImage: art.img,
        style: art.style
      }
      return item
    });

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
          <div className="gallery">{
            items.map((item) => (
              <Art
                title={item.title}
                artist={item.artist}
                price={item.price}
                artImage={item.artImage}
                style={item.style}
                id={item.tokenId}
                key={item.tokenId}
              />
            ))
          }</div>
        </div>
      </section>
    </div>
  );
}
export default Marketplace;