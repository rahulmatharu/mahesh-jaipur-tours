"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Function to handle body scroll when menu opens or closes
    const handleBodyScroll = () => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    // Add event listener when component mounts
    handleBodyScroll();

    // Clean up event listener when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 py-2 transition-all duration-300 ${
        scrolled ? "bg-pink-600 shadow-md" : "bg-black bg-opacity-5"
      }`}
    >
      <div className="max-container flex justify-between items-center w-full padding-container">
        <Link href="/" className="flex-shrink-0">
          <Image src={"/tuk-tuk.png"} alt={"logo"} width={50} height={50} />
        </Link>
        <ul className="hidden h-full gap-28 md:flex flex-grow justify-center ">
          {NAV_LINKS.map((link) => (
            <div
              key={link.key}
              className={`${pathname === link.href && "border-b-2"} ${
                scrolled ? "border-white" : "border-pink-600"
              }`}
            >
              <Link
                href={link.href}
                key={link.key}
                className={` text-l font-fugaz flexCenter cursor-pointer transition-all hover:font-extrabold ${
                  scrolled ? "text-white" : "text-pink-600"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </ul>
        <MenuIcon
          className={`text-4xl md:hidden ${
            scrolled ? "fill-white" : "fill-pink-800"
          } cursor-pointer`}
          onClick={toggleMenu}
        />
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-screen h-screen bg-pink-800 bg-opacity-90 flex items-center justify-center">
          <CloseIcon
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="text-center">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="mb-4">
                <Link
                  href={link.href}
                  className={`text-white text-xl font-fugaz block transition-all hover:font-extrabold`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
