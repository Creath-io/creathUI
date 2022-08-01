import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function TheHoldI() {
  const theHoldI = ArtData.find(({ title }) => title === "The Hold I");

  return (
    <DescriptionPage
      title={theHoldI.title}
      artist={theHoldI.artist}
      price={theHoldI.price}
      artImage={theHoldI.img}
      description={theHoldI.description}
    />
  );
}
