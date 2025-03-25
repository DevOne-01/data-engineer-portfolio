import Image from "next/image";
import Hero from '@/sections/hero'
import About from '@/sections/about'
import Skills from '@/sections/skills'
import Projects from '@/sections/projects'
import Experience from '@/sections/experience'
import Certifications from '@/sections/certifications'
import Contact from '@/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  )
}
