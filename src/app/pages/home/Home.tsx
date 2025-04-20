import { Adoption } from "./container/Adoption";
import { FriendBanner } from "./container/FriendBanner";
import { HeroBanner } from "./container/HeroBanner";
import { Sellers } from "./container/Sellers";

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <FriendBanner />
      <Sellers />
      <Adoption />
    </>
  );
};
