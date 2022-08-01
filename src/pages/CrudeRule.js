import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function CrudeRule() {
  const crudeRule = ArtData.find(({ title }) => title === "Crude Rule");

  return (
    <DescriptionPage
      title={crudeRule.title}
      artist={crudeRule.artist}
      price={crudeRule.price}
      artImage={crudeRule.img}
      description={crudeRule.description}
    />
  );
}
