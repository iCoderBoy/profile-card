import Hero from "@/components/UI/Hero";
import Projects from "@/components/UI/Projects/Projects";
import { Reveal } from "react-reveal";


export default function Home() {
  return (
    <>
    <Reveal effect="fadeInUp">
      <Hero/>
    </Reveal>
    
    <Reveal effect="fadeInUp">
      <Projects/>
    </Reveal>
    </>  
    )
}
