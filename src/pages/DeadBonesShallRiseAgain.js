import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function deadBonesShallRiseAgain() {
  const deadBonesShallRiseAgain = ArtData.find(
    ({ title }) => title === "Dead Bones Shall Rise Again"
  );

  return (
    <DescriptionPage
      title={deadBonesShallRiseAgain.title}
      artist={deadBonesShallRiseAgain.artist}
      price={deadBonesShallRiseAgain.price}
      artImage={deadBonesShallRiseAgain.img}
      description={deadBonesShallRiseAgain.description}
    />
  );
}
