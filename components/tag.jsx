import React from "react";

export default function tag({ cat }) {
  if (cat == "Sin Gluten")
    return (
      <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset bg-pink-50 text-pink-700 ring-pink-700/10 ">
        {cat}
      </span>
    );

  if (cat == "Sin Lácteos")
    return (
      <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset bg-yellow-50 text-yellow-800 ring-yellow-600/20">
        {cat}
      </span>
    );

  if (cat == "Sin Azúcar")
    return (
      <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset bg-purple-50 text-purple-700 ring-purple-700/10">
        {cat}
      </span>
    );

  if (cat == "Sin Huevo")
    return (
      <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset bg-red-50  text-red-600 ring-red-500/10">
        {cat}
      </span>
    );
}
