
import ClientLogos from "@/components/clientLogos";
import Features from "../components/features";
import Hero from "@/components/hero/page";
import DevelopmentTools from "@/components/developmentTools";
import ProjectTimeline from "@/components/projectTimeline";
import ProjectCarousel from "@/components/projectCarousel";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";




export default function Home() {
  return (
    <>

        <Hero />
        <Features />
        <ClientLogos />
        <DevelopmentTools />
        <ProjectTimeline />
        <ProjectCarousel />
        <Testimonials />
        <Faq/>

    </>
  );
}
