import DescriptionPage from "./DescriptionPage";
import ArtData from "./ArtData";

export default function ProductDescription() {
  const artGallery = ArtData.map((art) => (
    <DescriptionPage
      title={art.title}
      artist={art.artist}
      price={art.price}
      artImage={art.img}
      description={art.description}
    />
  ));

  return <div> {artGallery}</div>;
}
