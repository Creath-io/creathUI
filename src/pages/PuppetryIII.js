import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function PuppetryIII() {
  const puppetryIII = ArtData.find(
    ({ title }) => title === "Puppetry III (Vices of Men)"
  );

  return (
    <DescriptionPage
      title={puppetryIII.title}
      artist={puppetryIII.artist}
      price={puppetryIII.price}
      artImage={puppetryIII.img}
      description={puppetryIII.description}
    />
  );
}
