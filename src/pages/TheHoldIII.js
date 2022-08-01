import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function TheHoldIII() {
  const theHoldIII = ArtData.find(({ title }) => title === "The Hold III");

  return (
    <DescriptionPage
      title={theHoldIII.title}
      artist={theHoldIII.artist}
      price={theHoldIII.price}
      artImage={theHoldIII.img}
      description={theHoldIII.description}
    />
  );
}
