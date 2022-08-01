import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function JusticeIsComing() {
  const justiceIsComing = ArtData.find(
    ({ title }) => title === "Justice is coming"
  );

  return (
    <DescriptionPage
      title={justiceIsComing.title}
      artist={justiceIsComing.artist}
      price={justiceIsComing.price}
      artImage={justiceIsComing.img}
      description={justiceIsComing.description}
    />
  );
}
