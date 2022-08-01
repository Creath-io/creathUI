import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function DyingTender() {
  const dyingTender = ArtData.find(({ title }) => title === "Dying Tender");

  return (
    <DescriptionPage
      title={dyingTender.title}
      artist={dyingTender.artist}
      price={dyingTender.price}
      artImage={dyingTender.img}
      description={dyingTender.description}
    />
  );
}
