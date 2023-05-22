import React from "react";
import Icons from "../components/icons";
import Newslatter from "../components/newslatter";

export default function footer() {
  return (
    <footer>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Icons />
          </div>

          <p className="py-5 text-gray-400 text-center">
            Copyright ©2023 Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
