import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function OurHorror() {
  const ourHorror = ArtData.find(({ title }) => title === "Our Horror");

  return (
    <DescriptionPage
      title={ourHorror.title}
      artist={ourHorror.artist}
      price={ourHorror.price}
      artImage={ourHorror.img}
      description={ourHorror.description}
    />
  );
}
