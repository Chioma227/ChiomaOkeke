import Sidebar from "@/components/organisms/about/AboutSidebar";
import Container from "@/components/atoms/container";
import { containerVariants } from "@/variants/rootVariants";
import { ReactComponentElement, ReactNode } from "react";
import Content from "@/components/organisms/about/Content";

interface LayoutProps {
  children: ReactComponentElement<any, any>[] | ReactNode;
}

const { FLEXED } = containerVariants;

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <Container variant={FLEXED}>
      <main>
        <Content/>
      </main>
      <Sidebar />
    </Container>
  );
};

export default AboutLayout;
