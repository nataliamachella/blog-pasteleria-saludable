import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "../components/icons";

export default function header() {
  return (
    <header className="w-full  flex flex-col md:flex-row justify-evenly gap-3 items-center p-3 ">
      <div className="flex order-2">
        <input
          type="text"
          placeholder="Buscar..."
          className="border-[#FFBAA9] border-2 rounded-full w-60 px-3 py-2 focus:outline-none focus:border-[#E26698] text-[#643E17]"
        />
      </div>
      <div className="order-1">
        <Link href={"/"}>
          <Image src={"/images/logo.png"} width={80} height={80} alt="logo" />
        </Link>
      </div>
      <div className="order-3 py-3">
        <Icons />
      </div>
    </header>
  );
}
