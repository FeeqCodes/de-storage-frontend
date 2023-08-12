import { BaseLayout } from "@components/ui/layout";
import { Hero } from "@components/ui/homepage";
import {  Navbar, WalletBar } from "@components/ui/shared";
import { ButtonWrapper } from "@components/ui/wrappers";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className={`bg-gradient-radial from-grey to-grey2 relative   h-auto overflow-hidden  `}
      >
        <div className="h-[160px] w-[160px] absolute top-[0] left-[-55px] rounded-full bg-circleRed "></div>

        <Navbar />
        <WalletBar />
        <Hero />
        <ButtonWrapper />
      </div>
    </>
  );
}

Home.Layout = BaseLayout
