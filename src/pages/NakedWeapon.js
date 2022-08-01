import ArtData from "../ArtData";
import DescriptionPage from "./DescriptionPage";
export default function NakedWeapon() {
  const nakedWeapon = ArtData.find(({ title }) => title === "Naked Weapon");

  return (
    <DescriptionPage
      title={nakedWeapon.title}
      artist={nakedWeapon.artist}
      price={nakedWeapon.price}
      artImage={nakedWeapon.img}
      description={nakedWeapon.description}
    />
  );
}
