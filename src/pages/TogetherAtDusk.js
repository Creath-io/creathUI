import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function TogetherAtDust() {
  const togetherAtDusk = ArtData.find(
    ({ title }) => title === "Together At Dusk"
  );

  return (
    <DescriptionPage
      title={togetherAtDusk.title}
      artist={togetherAtDusk.artist}
      price={togetherAtDusk.price}
      artImage={togetherAtDusk.img}
      description={togetherAtDusk.description}
    />
  );
}
