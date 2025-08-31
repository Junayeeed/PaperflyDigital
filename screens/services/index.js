import Layout from "@/components/Layout";
import Hero from "./hero";
import Statement from "./statement";
import Facts from "./facts";
import CTA from "../universal/cta";
import Services from "../universal/services";

export default function ServicesPage() {
  return (
    <Layout>
      <Hero />
      <Statement />
      <Facts />
      <CTA />
      <Services extended={true} />
    </Layout>
  );
}