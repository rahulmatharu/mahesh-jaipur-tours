"use client";

import PhotoAlbum from "react-photo-album";
import Hero from "../components/Hero";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero title="Tours" />
      <div className=" p-8">
        <section className="max-w-4xl h-80 mx-auto md:p-8">
          <h2>Coming soon...</h2>
        </section>
      </div>
    </>
  );
}
