import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function Ozymandias() {
  const ozymandias = ArtData.find(({ title }) => title === "Ozymandias");
  // console.log(ozymandias);
  return (
    <DescriptionPage
      title={ozymandias.title}
      artist={ozymandias.artist}
      price={ozymandias.price}
      artImage={ozymandias.img}
      description={ozymandias.description}
    />
  );
}
