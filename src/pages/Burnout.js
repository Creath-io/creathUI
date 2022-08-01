import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function Burnout() {
  const burnout = ArtData.find(({ title }) => title === "Burnout");

  return (
    <DescriptionPage
      title={burnout.title}
      artist={burnout.artist}
      price={burnout.price}
      artImage={burnout.img}
      description={burnout.description}
      url={burnout.url}
    />
  );
}
