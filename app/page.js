"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";
import Experience from "@/components/Experience"
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <Experience />
      <ProjectsSection />
     <ContactSection />
    </main>
  )
}