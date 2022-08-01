import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function AdeGoriOkun() {
  const adeGoriOkun = ArtData.find(({ title }) => title === "Ade Gori Okun");

  return (
    <DescriptionPage
      title={adeGoriOkun.title}
      artist={adeGoriOkun.artist}
      price={adeGoriOkun.price}
      artImage={adeGoriOkun.img}
      description={adeGoriOkun.description}
      url={adeGoriOkun.url}
    />
  );
}
