import { HIGHLIGHTS } from "@/constants";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "./Button";
import Image from "next/image";

const Highlights = () => {
  return (
    <section className="flex flex-col gap-6 p-8 m-w-3xl md:space-x-6 ">
      <div className="flex items-center justify-center flex-col-reverse gap-6 md:flex-row">
        <div className="flexCenter flex-col gap-6">
          <h1 className="font-extrabold text-gray-800 text-2xl max-w-lg text-center">
            Check out Jaipur’s landmarks and combine them with the fun of tuk
            tuk or private taxi travel on a city tour
          </h1>
          <ul className="font-bold flex-col gap-1">
            {HIGHLIGHTS.map((highlight) => (
              <HighlightItem text={highlight.text} key={highlight.key} />
            ))}
          </ul>
        </div>
        <Image
          src="/gallery/gallery-16.jpeg"
          alt="Mahesh with Tuk Tuk"
          className="w-2/3 md:w-1/3 max-w-sm object-cover align-middle justify-center relative bg-white p-2 rounded-sm rotate-2 shadow-2xl"
          width={1280}
          height={720}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 items-center justify-center">
        <Button
          type={"link"}
          href="https://wa.link/w25utz"
          title={"Book on WhatsApp"}
          icon="./whatsapp.svg"
          variant={"btn_whatsapp_green"}
          openInNew={true}
        />
        <Button
          type={"link"}
          href="https://www.tripadvisor.com/AttractionProductReview-g304555-d17681536-Jaipur_Local_Day_Tour_by_Tuk_Tuk_Auto_Rickhsaw_All_Inclusive-Jaipur_Jaipur_Distric.html"
          title={"Book on Tripadvisor"}
          icon="./tripadvisor-logo-black.svg"
          variant={"btn_tripadvisor_green"}
          openInNew={true}
        />
      </div>
    </section>
  );
};

type HighlightItemProps = {
  text: string;
  key: string;
};

const HighlightItem = ({ text, key }: HighlightItemProps) => {
  return (
    <li className="flex items-center" key={key}>
      <CheckBoxIcon className="text-4xl fill-pink-800 pr-2" />
      <h4 className=" text-pink-800 font-extrabold text-xl whitespace-nowrap">
        {text}
      </h4>
    </li>
  );
};

export default Highlights;
