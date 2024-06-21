import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="flexCenter bg-pink-900">
      <div className="padding-container py-6 max-container flex w-full flex-col gap-4">
        <div className="flex flex-col items-start justify-center gap-[15%] md:flex-row pr-10">
          <Link href="/" className="mb-10">
            <Image src="/tuk-tuk.png" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul
                  className="flex flex-col gap-2 text-sm text-white"
                  key={columns.title}
                >
                  {columns.links.map((link) => (
                    <div key={link.title}>
                      <Link
                        href={link.href}
                        key={link.title}
                        target={`${
                          link.href.startsWith("https") ? "_blank" : "_self"
                        }`}
                        className="hover:text-gray-300 transition-all"
                      >
                        {link.title}
                        {link.href.startsWith("https") && (
                          <OpenInNewIcon className={"text-lg pl-1 mb-0.5"} />
                        )}
                      </Link>
                    </div>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-3">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href={`tel:${link.value}`}
                    key={link.label}
                    className="flex gap-2 text-sm flex-row"
                  >
                    <PhoneIcon className="fill-white text-lg" />
                    <p className="whitespace-nowrap text-white">
                      {link.label}:
                    </p>
                    <p className="whitespace-nowrap font-bold text-blue-300 underline">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-pink-300" />
        <p className="text-xs text-yellow-200 font-bold font-caveat w-full text-center">
          BUILT & SPONSORED BY RAHUL MATHARU
        </p>
        <p className="regular-14 text-pink-200 w-full text-center">
          © 2024 Jaipur Auto Tours | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-3" key={title}>
      <h4 className="regular-16 font-fugaz text-pink-300 whitespace-nowrap">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default Footer;
