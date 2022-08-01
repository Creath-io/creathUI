import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function DailyBread() {
  const dailyBread = ArtData.find(({ title }) => title === "Daily Bread");

  return (
    <DescriptionPage
      title={dailyBread.title}
      artist={dailyBread.artist}
      price={dailyBread.price}
      artImage={dailyBread.img}
      description={dailyBread.description}
    />
  );
}
