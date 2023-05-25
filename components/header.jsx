import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "../components/icons";
import Search from "./search";

export default function header() {
  return (
    <header className="w-full  flex flex-col md:flex-row justify-evenly gap-3 items-center p-3 ">
      <div className="flex order-2 gap-3 md:order-3">
        <Search />
      </div>
      <div className="order-1 md:order-2">
        <Link href={"/"}>
          <Image src={"/images/logo.png"} width={80} height={80} alt="logo" />
        </Link>
      </div>
      <div className="order-3 py-3 md:order-1">
        <Icons />
      </div>
    </header>
  );
}
