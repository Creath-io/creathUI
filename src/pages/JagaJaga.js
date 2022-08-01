import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function JagaJaga() {
  const jagaJaga = ArtData.find(({ title }) => title === "Jaga Jaga");

  return (
    <DescriptionPage
      title={jagaJaga.title}
      artist={jagaJaga.artist}
      price={jagaJaga.price}
      artImage={jagaJaga.img}
      description={jagaJaga.description}
    />
  );
}
