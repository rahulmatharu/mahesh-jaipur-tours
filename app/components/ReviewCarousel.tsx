"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

interface Review {
  name: string;
  heading: string;
  img?: string;
  description: string;
  date: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "Lucie M",
    heading: "Great experience in Jaipur with Mahesh",
    description:
      "Mahesh was a great guide and tuk tuk driver for my visit to Jaipur. Very helpful, generous, and funny I highly recommend him to anyone wanting to visit this part of the country 🙏",
    date: "April 2022",
    img: "/review-images/review-lucie.jpg",
    stars: 5,
  },
  {
    name: "Compass",
    heading: "Honest and helpful guide",
    description:
      "Mahesh knows the city very well and he speaks good English. \n\n He is honest and very helpful. I recommend him.",
    date: "October 2022",
    img: "/review-images/review-compass.jpg",
    stars: 5,
  },
  {
    name: "Thusitha P",
    heading:
      "Solo tour with Mahesh - Great person with good English and knowledge of sightseeing places",
    description:
      "I met Mahesh a tuktuk driver in Jaipur. I covered all sightseeing places with Mahesh. He was good in English and has good knowledge of sightseeing places around Jaipur. He helped me to book my tickets to Delhi also dropped me to the bus on my last day. He arranged everything perfectly and I'm so happy. Contact him when you visit Jaipur!",
    date: "October 2022",
    img: "/review-images/review-thusitha.jpg",
    stars: 5,
  },
];

const ReviewCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="container mx-auto p-8">
      <SectionHeading title="TESTIMONIALS"></SectionHeading>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="flex justify-center" key={index}>
            <div className="max-w-4xl flex mx-auto">
              <div
                key={index}
                className="p-4 border-2 rounded-lg flex flex-col md:flex-row"
              >
                <div className=" flex flex-col justify-between md:w-3/4 pr-0 pb-4 md:pr-4 md:pb-0">
                  <Image
                    src={"tripadvisor-logo.svg"}
                    alt="TripAdvisor"
                    className=" h-5 mb-4 self-start"
                  />
                  <h2 className="text-xl font-bold mb-4">{review.heading}</h2>
                  <p className="text-gray-600">{review.description}</p>
                  <div className="flex items-center mt-2">
                    {Array(review.stars)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-7 h-7 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.347 2.428a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.347-2.428a1 1 0 00-1.175 0l-3.347 2.428c-.784.57-1.838-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.052 9.378c-.784-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.951z" />
                        </svg>
                      ))}
                  </div>
                  <p className="text-gray-500 mt-4 text-sm">
                    {review.name} - {review.date}
                  </p>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  {review.img && (
                    <Image
                      src={review.img}
                      alt={review.heading}
                      className="object-cover rounded mb-4 max-h-72"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
