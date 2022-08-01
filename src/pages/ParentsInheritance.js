import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function ParentsInheritance() {
  const parentsInheritance = ArtData.find(
    ({ title }) => title === "Parents' Inheritance"
  );

  return (
    <DescriptionPage
      title={parentsInheritance.title}
      artist={parentsInheritance.artist}
      price={parentsInheritance.price}
      artImage={parentsInheritance.img}
      description={parentsInheritance.description}
    />
  );
}
