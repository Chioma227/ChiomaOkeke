import Container from "@/components/atoms/container";
import { containerVariants } from "@/variants/rootVariants";
const { NORMAL } = containerVariants;

const Sidebar = () => {
  return (
    <Container variant={NORMAL} className="bg fixed top-0 right-0 z-10">
      <h2 className="flex items-center justify-center h-[100vh] txt_lg light">
        ABOUT ME
      </h2>
    </Container>
  );
};

export default Sidebar;
