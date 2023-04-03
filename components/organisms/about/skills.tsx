import IconLink from "@/components/molecules/iconLink";
import Container from "@/components/atoms/container";
import { containerVariants } from "@/variants/rootVariants";
import ts from "../../../public/icons/ts_logo.png";
import tailwind from "../../../public/icons/Tailwind_CSS_Logo.svg.png";
import reactLogo from "../../../public/icons/React-icon.svg.png";
import jsLogo from "../../../public/icons/JavaScript-Logo.png";
import scssLogo from "../../../public/icons/scss_logo.png";
import cssLogo from "../../../public/icons/css_logo.png";
import htmlLogo from "../../../public/icons/html_logo.jpg";

const { FLEXED } = containerVariants;

const Skills = () => {
  const schema = [
    {
      id: 1,
      href: "/",
      src: ts,
      width: 40,
      height: 40,
      alt: "",
    },
    {
      id: 2,
      href: "/",
      src: tailwind,
      width: 40,
      height: 40,
      alt: "",
    },
    {
      id: 3,
      href: "/",
      src: jsLogo,
      width: 40,
      height: 40,
      alt: "",
    },
    {
      id: 4,
      href: "/",
      src: reactLogo,
      width: 40,
      height: 40,
      alt: "",
    },
    {
      id: 5,
      href: "/",
      src: scssLogo,
      width: 40,
      height: 40,
      alt: "",
    },
    {
      id: 6,
      href: "/",
      src: cssLogo,
      width: 40,
      height: 40,
      alt: "",
    },
    {
      id: 7,
      href: "/",
      src: htmlLogo,
      width: 40,
      height: 40,
      alt: "",
    },
  ];

  return (
    <Container variant={FLEXED}>
      {schema.map((item) => {
        return (
          <IconLink
            key={item.id}
            href={item.href}
            src={item.src}
            alt={item.alt}
            height={item.height}
            width={item.width}
          />
        );
      })}
    </Container>
  );
};

export default Skills;
