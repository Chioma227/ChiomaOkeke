import { useRouter } from "next/router";
import Container from "../../atoms/container";
import Button from "@/components/atoms/button";
import { eventNoArg } from "@/types/events.types";
import { containerVariants, ButtonVariant } from "@/variants/rootVariants";

const { FLEX_COL, FLEXED, NORMAL, FLEX_START } = containerVariants;
const { SECONDARY } = ButtonVariant;

const AboutIndex = () => {
  const router = useRouter();
  const route: eventNoArg = () => {
    router.push("/");
  };

  const url = "file:///C:/Users/ADMIN/Documents/My%20Resume..pdf"

  return (
    <Container variant={FLEXED}>
      <Container
        variant={FLEX_COL}
        className=" px-[7rem] py-[8rem] leading-[2rem] mr-[35%] txt_xs"
      >
        <Container variant={FLEX_START}>
          <h2 className="txt_md">Hi,</h2>
          <h2 className="txt_md">I'm Chioma</h2>
          <p className="txt_sm top_md">A frontend Developer,</p>
        </Container>
        <main className="top_md text-justify ">
          <p>
            who is passionate about creating beautiful, user-friendly interfaces
            that make a positive impact on people's lives. With a keen eye for
            design and a strong technical background, I have a unique ability to
            bridge the gap between aesthetics and functionality. My journey as a
            developer began with a fascination for the web and a desire to build
            things that could be accessed by anyone, anywhere. Over the years, I
            have honed my skills in HTML, CSS, JavaScript, and other frontend
            technologies, constantly pushing myself to stay up-to-date with the
            latest trends and best practices.
          </p>
          <p className="top_md">
            In addition to technical proficiency, I pride myself on my ability
            to collaborate effectively with designers, product managers, and
            other stakeholders to bring projects to life. I am a strong
            communicator, both in writing and in person, and I'm always looking
            for ways to improve the development process and create better
            outcomes for users. Outside of work, I enjoy tinkering with new
            technologies, attending industry events and meetups, and
            contributing to open-source projects. I believe that a great
            frontend developer is never satisfied with the status quo and is
            always striving to learn and grow. Overall, I am driven by a deep
            passion for creating exceptional user experiences and I'm excited to
            bring my skills and enthusiasm to any project I work on.
          </p>
        </main>
        <Button variant={SECONDARY} onClick={route}>
          hek
        </Button>
          <a href={url} download="chioma.pdf">Download</a>
      </Container>
      <Container variant={NORMAL} className="bg fixed top-0 right-0 z-10">
        <h2 className="flex items-center justify-center h-[100vh] txt_lg light">
          ABOUT ME
        </h2>
      </Container>
    </Container>
  );
};

export default AboutIndex;
