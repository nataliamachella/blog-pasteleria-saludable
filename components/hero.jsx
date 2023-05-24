import React from "react";

export default function hero() {
  return (
    <div className="relative w-full h-[400px] bg-[url('/images/bg_home.png')]">
      <div className="absolute text-center top-[60%] md:top-[35%] md:left-[25%] text-4xl font-bold  md:text-5xl fontHero  text-[#643E17]">
        Recetas de Pastelería Saludable
      </div>
    </div>
  );
}
