import Img from "../../atoms/img";
import Button from "../../atoms/button";
import { useRouter } from "next/router";
import Container from "../../atoms/container";
import { eventNoArg } from "@/types/events.types";
import pic from '../../../public/imgs/hero_dark_2.jpg'
import { ButtonVariant, containerVariants } from "@/variants/rootVariants";

const { FLEXED, FLEX_COL, NORMAL } = containerVariants;
const { SECONDARY } = ButtonVariant;

const Hero = () => {
  const router = useRouter();
  const navigate: eventNoArg = () => {
    router.push("/about_me");
  };

  return (
    <Container variant={FLEXED}>
      <Container variant={FLEX_COL} className="bg flex-1 light select-none">
        <h1 className="uppercase txt_xl ">portfolio</h1>
        <Button variant={SECONDARY} onClick={navigate} className="top_md">
          Explore
        </Button>
      </Container>
      <Container variant={NORMAL} className="">
        <Img
          alt="Chioma Okeke"
          src={pic}
          width={520}
          height={500}
          className=" object-cover"
        />
        <Container variant={FLEX_COL} className="top_lg select-none">
          <h2 className="txt_md">Chioma Okeke</h2>
          <p className="txt_sm">Frontend Developer</p>
        </Container>
      </Container>
    </Container>
  );
};

export default Hero;
