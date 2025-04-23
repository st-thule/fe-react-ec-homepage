import React from "react";

import { HeroBanner } from "@app/pages/home/container/HeroBanner";
import { FriendBanner } from "@app/pages/home/container/FriendBanner";
import { Sellers } from "@app/pages/home/container/Sellers";
import { Adoption } from "@app/pages/home/container/Adoption";

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
