import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import ReviewCarousel from "./components/ReviewCarousel";
import Highlights from "./components/Highlights";
import HomeGallery from "./components/HomeGallery";

export default function Home() {
  return (
    <>
      <Hero title={`DISCOVER \n THE PINK CITY \n LIKE NEVER BEFORE`} />
      <Highlights />
      <AboutMe />
      <ReviewCarousel />
      <HomeGallery />
    </>
  );
}
