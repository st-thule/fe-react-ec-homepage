import { Adoption } from './container/Adoption';
import { FriendBanner } from './container/FriendBanner';
import { HeroBanner } from './container/HeroBanner';
import { PetsSection } from './container/Pets';
import { ProductSection } from './container/Product';
import { Sellers } from './container/Sellers';

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <PetsSection />
      <FriendBanner />
      <ProductSection />
      <Sellers />
      <Adoption />
    </>
  );
};
