
import React from "react";
import Container from "../container";
import FadeIn from "../fade-in";

export default function Usps() {
  return (
    <Container className="space-y-12 text-3xl md:text-4xl font-bold text-white py-36 relative z-10 max-w-[692px]">
      <FadeIn>
      <p>New Apple Orginals every month - always ad free.</p>
      </FadeIn>
   <FadeIn>
   <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles ,or
          sticks.
        </p>
   </FadeIn>
    <FadeIn>
    <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
    </FadeIn>
    <FadeIn>
    <p>Share a single subcription with up to five people.</p>
    </FadeIn>
    </Container>
  );
} 
