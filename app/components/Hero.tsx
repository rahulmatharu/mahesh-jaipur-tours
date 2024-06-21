"use client";

type HeroProps = {
  title: string;
};

const Hero = ({ title }: HeroProps) => {
  return (
    <section>
      <div className="relative w-full h-96 bg-gray-900">
        <img
          src="hero.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-top "
        />
        <div className="relative z-10 flex pb-8 items-end md:p-0 justify-center h-full text-center">
          <div className="text-white font-fugaz max-w-2xl text-shadow">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 css-fix ${
                title.length > 10
                  ? "text-4xl md:text-5xl"
                  : "text-6xl md:text-8xl"
              }`}
            >
              {title}
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 from-black bg-gradient-to-t to-70% opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
