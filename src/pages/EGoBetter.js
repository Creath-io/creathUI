import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function EGoBetter() {
  const eGoBetter = ArtData.find(({ title }) => title === "E Go Better");

  return (
    <DescriptionPage
      title={eGoBetter.title}
      artist={eGoBetter.artist}
      price={eGoBetter.price}
      artImage={eGoBetter.img}
      description={eGoBetter.description}
    />
  );
}
