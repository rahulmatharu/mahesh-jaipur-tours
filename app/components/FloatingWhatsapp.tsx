import Image from "next/image";
import Link from "next/link";
import React from "react";

const FloatingWhatsapp = () => {
  return (
    <Link
      href="https://wa.link/w25utz"
      target="_blank"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#25D366] rounded-full p-4 hover:bg-green-700 transition duration-300"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-11 w-11 rounded-full bg-[#25D366] opacity-75 -z-10 animate-slow-ping" />
      </div>
      <Image src="/whatsapp.svg" alt="whatsapp" className="w-7 h-7" />
    </Link>
  );
};

export default FloatingWhatsapp;
