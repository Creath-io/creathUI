// import Navbar from "../Navbar";
import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function DeadPlusSearedMind() {
  const deadPlusSearedMind = ArtData.find(
    ({ title }) => title === "Dead + Seared Mind"
  );

  return (
    <DescriptionPage
      title={deadPlusSearedMind.title}
      artist={deadPlusSearedMind.artist}
      price={deadPlusSearedMind.price}
      artImage={deadPlusSearedMind.img}
      description={deadPlusSearedMind.description}
      urlPath = {deadPlusSearedMind.url}
    />
  );
}
