import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function GasFee() {
  const gasFee = ArtData.find(({ title }) => title === "Gas Fee");

  return (
    <DescriptionPage
      title={gasFee.title}
      artist={gasFee.artist}
      price={gasFee.price}
      artImage={gasFee.img}
      description={gasFee.description}
    />
  );
}
