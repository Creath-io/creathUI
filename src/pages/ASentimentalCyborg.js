import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function ASentimentalCyborg() {
  const aSentimentalCyborg = ArtData.find(
    ({ title }) => title === "A Sentimental Cyborg"
  );

  return (
    <DescriptionPage
      title={aSentimentalCyborg.title}
      artist={aSentimentalCyborg.artist}
      price={aSentimentalCyborg.price}
      artImage={aSentimentalCyborg.img}
      description={aSentimentalCyborg.description}
      url={aSentimentalCyborg.url}
    />
  );
}
