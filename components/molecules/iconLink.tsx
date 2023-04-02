import AnchorLink from "../atoms/link";
import Img from "../atoms/img";
import { StaticImageData } from "next/image";

interface ILinkprops {
  href: string;
  className: string;
  imgProps: {
    src: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
}

const IconLink = ({ href, className, imgProps }: ILinkprops) => {
  return (
    <AnchorLink href={href} className={className}>
      <Img {...imgProps} />
    </AnchorLink>
  );
};

export default IconLink;
