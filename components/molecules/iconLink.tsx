import AnchorLink from "../atoms/link";
import Img from "../atoms/img";
import { StaticImageData } from "next/image";

interface ILinkprops {
  href: string;
  className?: string;
  // imgProps: {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  // };
}

const IconLink = ({ href, className, src, alt, width, height }: ILinkprops) => {
  return (
    <AnchorLink href={href} className="">
      <Img src={src} alt={alt} width={width} height={height} />
    </AnchorLink>
  );
};

export default IconLink;
