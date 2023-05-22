import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export default function icons() {
  return (
    <div className="flex gap-6">
      <Link
        href={"https://www.facebook.com/profile.php?id=100092718034662"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare color="#643E17" size={"2em"} />
      </Link>
      <Link
        href={"https://www.instagram.com/naty.pasteleriasaludable/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram color="#643E17" size={"2em"} />
      </Link>
      <Link
        href={"https://www.youtube.com/channel/UCNr6Pl_PU5QgZvLJBtjLjiQ"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube color="#643E17" size={"2em"} />
      </Link>
    </div>
  );
}
