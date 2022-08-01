import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function DisastrousThoughts() {
  const disastrousThoughts = ArtData.find(
    ({ title }) => title === "Disastrous Thoughts"
  );

  return (
    <DescriptionPage
      title={disastrousThoughts.title}
      artist={disastrousThoughts.artist}
      price={disastrousThoughts.price}
      artImage={disastrousThoughts.img}
      description={disastrousThoughts.description}
    />
  );
}
