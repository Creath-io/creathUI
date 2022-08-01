import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function Estelle() {
  const estelle = ArtData.find(({ title }) => title === "Estelle");

  return (
    <DescriptionPage
      title={estelle.title}
      artist={estelle.artist}
      price={estelle.price}
      artImage={estelle.img}
      description={estelle.description}
    />
  );
}
