"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="w-full flex justify-between container mx-auto px-4 py-6 xl:py-10">
      <h1 className="md:w-1/2" aria-label="Lentera">
        <Image
          className="w-12 h-12 object-center object-cover"
          src={"/logo.png"}
          width={50}
          height={50}
          alt="Lentera Logo"
        />
      </h1>
      <ul className="md:w-1/2 hidden lg:flex flex-row items-center justify-between">
        <li className="text-black font-medium text-lg hover:underline">
          <Link href={"#"}>Home</Link>
        </li>
        <li className="text-slate-500 font-light text-lg hover:underline">
          <Link href={"#"}>Location</Link>
        </li>
        <li className="text-slate-500 font-light text-lg hover:underline">
          <Link href={"#"}>Success</Link>
        </li>
        <li className="text-slate-500 font-light text-lg hover:underline">
          <Link href={"#"}>Features</Link>
        </li>
        <li className="text-slate-500 font-light text-lg hover:underline">
          <Link href={"#"}>Account</Link>
        </li>
      </ul>
      <button className="lg:hidden border p-2 " onClick={() => setShowMenu(!showMenu)}>
        <RxHamburgerMenu className="text-2xl" />
      </button>
      <ul
        className={`${
          showMenu ? "fixed translate-x-0 " : "fixed translate-x-full"
        } lg:hidden w-full transition-transform duration-300 ease-in h-screen bg-white bg-opacity-50 top-0 left-0 backdrop-blur-md`}
      >
        <div className="flex justify-end px-4 py-6">
          <button
            className="border p-2 bg-white "
            onClick={() => setShowMenu(!showMenu)}
          >
            <IoCloseOutline className="text-2xl " />
          </button>
        </div>
        <ul className="flex flex-col gap-10 items-center px-20 mt-20">
          <li className="text-black font-medium text-lg hover:underline">
            <Link href={"#"}>Home</Link>
          </li>
          <li className="text-slate-500 font-light text-lg hover:underline">
            <Link href={"#"}>Location</Link>
          </li>
          <li className="text-slate-500 font-light text-lg hover:underline">
            <Link href={"#"}>Success</Link>
          </li>
          <li className="text-slate-500 font-light text-lg hover:underline">
            <Link href={"#"}>Features</Link>
          </li>
          <li className="text-slate-500 font-light text-lg hover:underline">
            <Link href={"#"}>Account</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
