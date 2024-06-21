"use client";

import PhotoAlbum from "react-photo-album";
import Hero from "../components/Hero";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";

const photos = [
  { src: "/gallery/gallery-1.jpeg", width: 718, height: 1041 },
  { src: "/gallery/gallery-2.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-3.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-4.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-5.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-6.jpeg", width: 768, height: 1024 },
  { src: "/gallery/gallery-7.jpeg", width: 1024, height: 768 },
  { src: "/gallery/gallery-8.jpeg", width: 720, height: 1280 },
  { src: "/gallery/gallery-9.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-10.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-11.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-12.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-13.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-14.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-15.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-16.jpeg", width: 1280, height: 720 },
  { src: "/gallery/gallery-17.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-18.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-19.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-20.jpeg", width: 962, height: 1280 },
  { src: "/gallery/gallery-21.jpeg", width: 1280, height: 950 },
  { src: "/gallery/gallery-22.jpeg", width: 492, height: 492 },
  { src: "/gallery/gallery-23.jpeg", width: 1600, height: 800 },
  { src: "/gallery/gallery-24.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-25.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-26.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-27.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-28.jpg", width: 3072, height: 4080 },
  { src: "/gallery/gallery-29.jpg", width: 3072, height: 4080 },
  { src: "/gallery/gallery-30.jpg", width: 3072, height: 4080 },
  { src: "/gallery/gallery-31.jpg", width: 4080, height: 3072 },
  { src: "/gallery/gallery-32.jpg", width: 4080, height: 3072 },
  { src: "/gallery/gallery-33.jpg", width: 4080, height: 3072 },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const openLightbox = (index: number) => {
    setOpen(true);
    setIndex(index);
  };

  return (
    <>
      <Hero title="Gallery" />
      <div className=" p-8">
        <section className="max-w-4xl mx-auto md:p-8">
          <div className="flex flex-col gap-1 pb-2"></div>
          <PhotoAlbum
            layout="rows"
            photos={photos}
            onClick={({ index }) => {
              openLightbox(index);
            }}
          />
        </section>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={index}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
      />
    </>
  );
}
