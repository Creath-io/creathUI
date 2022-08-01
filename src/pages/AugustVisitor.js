import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function AugustVisitor() {
  const augustVisitor = ArtData.find(({ title }) => title === "August Visitor");

  return (
    <DescriptionPage
      title={augustVisitor.title}
      artist={augustVisitor.artist}
      price={augustVisitor.price}
      artImage={augustVisitor.img}
      description={augustVisitor.description}
      urlPath={augustVisitor.url}
    />
  );
}
