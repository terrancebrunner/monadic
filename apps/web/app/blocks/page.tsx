import { WhatIsItSection } from "@workspace/ui/components/gmh/blocks/gmh-whatisit-section"

import { GetItSection } from "@workspace/ui/components/gmh/blocks/gmh-getit-section"
import { HowToUseSection } from "@workspace/ui/components/gmh/blocks/gmh-howtouseit-section"
import { InnovationHeader } from "@workspace/ui/components/gmh/blocks/gmh-innovation-header"
import { NavigationFooter } from "@workspace/ui/components/gmh/blocks/gmh-navigation-footer"
import { UserStorySection } from "@workspace/ui/components/gmh/blocks/gmh-userstory-section"
import { TestingSection } from "@workspace/ui/components/gmh/blocks/gmh-testing-section"

import Navbar1 from "@workspace/ui/components/blocks/navbar-01";
import Navbar2 from "@workspace/ui/components/blocks/navbar-02";
import Footer2 from "@workspace/ui/components/blocks/footer-02";
import Hero1 from "@workspace/ui/components/blocks/hero-01";
import Hero2 from "@workspace/ui/components/blocks/hero-02";
import Hero3 from "@workspace/ui/components/blocks/hero-03";
import Hero4 from "@workspace/ui/components/blocks/hero-04";
import Hero6 from "@workspace/ui/components/blocks/hero-06";
import Hero7 from "@workspace/ui/components/blocks/hero-07";
import Features1 from "@workspace/ui/components/blocks/features-01";
import Features3 from "@workspace/ui/components/blocks/features-03";
import Features4 from "@workspace/ui/components/blocks/features-04";
import Features6 from "@workspace/ui/components/blocks/features-06";
import Features7 from "@workspace/ui/components/blocks/features-07";

export default function Page() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero6 />
      <Hero7 />
      <Features1 />
      <Features3 />
      <Features4 />
      <Features6 />
      <Features7 />
      <Footer2 />
      <WhatIsItSection />
      <GetItSection />
      <HowToUseSection />
      <InnovationHeader />
      <NavigationFooter />
      <TestingSection />
      <UserStorySection />

    </>
  );
}
