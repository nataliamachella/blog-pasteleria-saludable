import React from "react";

export default function hero() {
  return (
    <div className="relative w-full h-[400px] bg-[url('/images/bg_home.png')]">
      <div className="absolute text-center top-[40%] left-[10%] md:top-[35%] md:left-[35%] text-4xl font-bold  md:text-5xl fontHero  text-[#643E17]">
        <h1>Pastelería Saludable</h1>
        <span className=" text-xl ">Sin Gluten, sin Azúcar y sin Lácteos</span>
      </div>
    </div>
  );
}
