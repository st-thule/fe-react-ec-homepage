import React from "react";

import { HeroBanner } from "@app/pages/home/components/HeroBanner";
import { FriendBanner } from "@app/pages/home/components/FriendBanner";
import { Sellers } from "@app/pages/home/components/Sellers";
import { Adoption } from "@app/pages/home/components/Adoption";

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
