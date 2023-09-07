import React from "react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <nav className="text-2xl font-medium z-20 relative text-white ">
      <ul className="flex gap-12">
        <Link href={"/"}>
          <li className="hover:underline">Home</li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:underline">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar2;
