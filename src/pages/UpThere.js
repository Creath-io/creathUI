import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function UpThere() {
  const upThere = ArtData.find(({ title }) => title === "Up There");

  return (
    <DescriptionPage
      title={upThere.title}
      artist={upThere.artist}
      price={upThere.price}
      artImage={upThere.img}
      description={upThere.description}
    />
  );
}
