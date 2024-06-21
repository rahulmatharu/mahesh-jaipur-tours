"use client";

import PhotoAlbum from "react-photo-album";
import Button from "./Button";

const photos = [
  { src: "/gallery/gallery-1.jpeg", width: 718, height: 1041 },
  { src: "/gallery/gallery-2.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-3.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-6.jpeg", width: 768, height: 1024 },
  { src: "/gallery/gallery-7.jpeg", width: 1024, height: 768 },
  { src: "/gallery/gallery-8.jpeg", width: 720, height: 1280 },
  { src: "/gallery/gallery-9.jpeg", width: 1200, height: 1600 },
  { src: "/gallery/gallery-10.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-11.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-12.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-13.jpeg", width: 1600, height: 1200 },
  { src: "/gallery/gallery-14.jpeg", width: 1600, height: 1200 },
];

const HomeGallery = () => {
  return (
    <div className="bg-orange-100 p-8">
      <section className="max-w-4xl mx-auto md:p-8">
        <div className="flex flex-col gap-1 pb-2">
          <h3 className="text-pink-600 font-fugaz text-2xl">
            A glimpse into Jaipur tours...
          </h3>
          {/* <p className="text-gray-700">Photos taken on tour with Mahesh</p> */}
        </div>

        <PhotoAlbum layout="rows" photos={photos} />
        <div className="flex justify-center py-3">
          <Button
            type={"link"}
            href="/gallery"
            title={"View more photos"}
            variant={"btn_pink"}
          />
        </div>
      </section>
    </div>
  );
};

export default HomeGallery;
