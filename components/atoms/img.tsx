import Image from "next/image";
import { StaticImageData } from "next/image";

interface Iprops {
  alt: string;
  src: string | StaticImageData;
  className?: string;
  width: number;
  height: number;
}

const Img = ({ alt, src, className, width, height }: Iprops) => {
  return (
    <Image
      width={width}
      src={src}
      alt={alt}
      height={height}
      className={className}
    />
  );
};

export default Img;
