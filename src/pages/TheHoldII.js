import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function TheHoldII() {
  const theHoldII = ArtData.find(({ title }) => title === "The Hold II");

  return (
    <DescriptionPage
      title={theHoldII.title}
      artist={theHoldII.artist}
      price={theHoldII.price}
      artImage={theHoldII.img}
      description={theHoldII.description}
    />
  );
}
