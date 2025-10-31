import { FeaturedProducts } from "../../components/Featured/Featured";
import { Hero } from "../../components/Hero/Hero";
import { InfoSection } from "../../components/InfoSection/InfoSection";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts rows={1} columns={3} />
      <InfoSection />
    </>
  );
};
