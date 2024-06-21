import Image from "next/image";
import Link from "next/link";

type ButtonProps =
  | {
      type: "button" | "submit";
      title: string;
      icon?: string;
      variant: "btn_pink" | "btn_whatsapp_green" | "btn_tripadvisor_green";
      href?: never;
      openInNew: boolean;
    }
  | {
      type: "link";
      title: string;
      icon?: string;
      variant: "btn_pink" | "btn_whatsapp_green" | "btn_tripadvisor_green";
      href: string;
      openInNew?: boolean;
    };

const Button = ({
  type,
  title,
  icon,
  variant,
  href,
  openInNew = false,
}: ButtonProps) => {
  return type == "link" ? (
    <Link
      href={href}
      className={`flexCenter gap-2 rounded-full  ${variant}`}
      target={`${openInNew ? "_blank" : "_self"}`}
    >
      {icon && <Image src={icon} alt={"title"} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </Link>
  ) : (
    <button className={`flexCenter gap-2 rounded-lg  ${variant}`} type={type}>
      {icon && <Image src={icon} alt={"title"} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
