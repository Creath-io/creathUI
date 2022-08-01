import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function ShortStory() {
  const shortStory = ArtData.find(({ title }) => title === "Short Story");

  return (
    <DescriptionPage
      title={shortStory.title}
      artist={shortStory.artist}
      price={shortStory.price}
      artImage={shortStory.img}
      description={shortStory.description}
    />
  );
}
