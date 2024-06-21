import Image from "next/image";
import SectionHeading from "./SectionHeading";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-yellow-100">
      <section className="flex flex-col items-center p-2 max-w-3xl md:flex-row md:space-x-6">
        <div className="relative w-44 mb-6 md:mb-0">
          <div className="relative h-full bg-white p-2 pb-8 rounded-sm -rotate-6 shadow-xl">
            <Image
              src="/mahesh-portrait.jpg"
              alt="Photo of Mahesh"
              width={789}
              height={1035}
              className="object-cover"
            />
          </div>
          <p className="absolute bottom-1 left-2 font-caveat w-full text-center -rotate-6 text-gray-700 font-bold">
            Mahesh
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-3/4 text-gray-700 text-center text-lg md:px-6 md:text-left">
          <h3 className="text-pink-600 font-fugaz text-2xl">
            Hi, I'm Mahesh...
          </h3>
          <p>
            I'm a Jaipur native providing personalised private tours around the
            Pink City in a private taxi or auto rikshaw (or tuk-tuk, as they are
            called in Southeast Asia). With over 10 years of experience driving
            a rickshaw, I know every nook and cranny of this vibrant city.
          </p>
          <p>
            My tours are not just about visiting landmarks, they are about
            experiencing Jaipur like a local. From the bustling markets to the
            serene temples, I ensure you get a genuine taste of our rich
            culture.
          </p>
          <p>
            Whether you're here for a day or a week, my mission is to make your
            visit unforgettable. Come, join me, and let's explore Jaipur!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
