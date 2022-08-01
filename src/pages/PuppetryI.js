import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function PuppetryI() {
  const puppetryI = ArtData.find(
    ({ title }) => title === "Puppetry I (Instrument of Chaos)"
  );

  return (
    <DescriptionPage
      title={puppetryI.title}
      artist={puppetryI.artist}
      price={puppetryI.price}
      artImage={puppetryI.img}
      description={puppetryI.description}
    />
  );
}
