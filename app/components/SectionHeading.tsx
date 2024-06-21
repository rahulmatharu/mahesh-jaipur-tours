import Image from "next/image";

type HeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4 ">
      <h2 className="text-sm font-fugaz font-semibold text-pink-600 ">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
