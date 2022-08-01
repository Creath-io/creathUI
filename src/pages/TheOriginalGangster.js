import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function TheOriginalGangster() {
  const theOriginalGangster = ArtData.find(
    ({ title }) => title === "The Original Gangster"
  );

  return (
    <DescriptionPage
      title={theOriginalGangster.title}
      artist={theOriginalGangster.artist}
      price={theOriginalGangster.price}
      artImage={theOriginalGangster.img}
      description={theOriginalGangster.description}
    />
  );
}
