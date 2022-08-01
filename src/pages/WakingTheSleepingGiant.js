import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function WakingTheSleepingGiant() {
  const wakingTheSleepingGiant = ArtData.find(
    ({ title }) => title === "Waking The Sleeping Giant"
  );

  return (
    <DescriptionPage
      title={wakingTheSleepingGiant.title}
      artist={wakingTheSleepingGiant.artist}
      price={wakingTheSleepingGiant.price}
      artImage={wakingTheSleepingGiant.img}
      description={wakingTheSleepingGiant.description}
    />
  );
}
