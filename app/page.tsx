import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { AIBlockchainSection } from '@/sections/AIBlockchainSection';
import { GitHubSection } from '@/sections/GitHubSection';
import { AchievementsSection } from '@/sections/AchievementsSection';
import { EducationSection } from '@/sections/EducationSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#020617] pt-24">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AIBlockchainSection />
      <GitHubSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
