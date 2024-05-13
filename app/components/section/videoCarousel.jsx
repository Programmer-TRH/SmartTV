"use client";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "@/data/movie";
import {
  motion,
  progress,
  useMotionValueEvent,
  useScroll,
  useTransform
} from "framer-motion";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "../button";

export default function VideoCarousel() {
  const { width, height } = useWindowSize();
  const maximaumScale = useMemo(
    () => {
      const windowRatio = height / width;
      const xScale = 1.66667;
      const yScale = xScale * (16 / 9) * windowRatio;
      return Math.max(xScale, yScale);
    },
    [width, height]
  );
  const carouselWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximaumScale * 1.1, maximaumScale, 1]
  );
  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant, setCarouselVariant] = useState("inactive");
  useMotionValueEvent(scrollYProgress, "change", progress => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-20">
      <div
        ref={carouselWrapperRef}
        className="overflow-clip h-[300vh] mt-[-100vh]"
      >
        <div className="h-screen sticky top-0 flex items-center mb-3">
          <div className="mb-5 flex gap-5 left-1/2 -translate-x-1/2 relative">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="w-[300px] md:w-[60vw] aspect-[16/9]  md:aspect-video shrink-0 overflow-clip rounded-2xl"
            >
              <Image
                src={movies[0].poster}
                alt={movies[0].name}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              style={{ scale }}
              className="w-[300px] md:w-[60vw] relative aspect-[9/16]  md:aspect-video shrink-0 overflow-clip rounded-2xl"
            >
              <Image
                src={movies[1].poster}
                alt={movies[1].name}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />

              <motion.div
                variants={{
                  active: { opacity: 1, y: 0 },
                  inactive: { opacity: 0, y: 20 }
                }}
                className="absolute flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between left-0 bottom-0 w-full p-5 text-white text-lg"
              >
                <p>Best video title ever</p>
                <Button>Watch Now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="w-[300px] md:w-[60vw] aspect-[16/9] md:aspect-video shrink-0 overflow-clip rounded-2xl"
            >
              <Image
                src={movies[2].poster}
                alt={movies[2].name}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.5 }}
        className="space-y-5  -mt-[calc((100vh-(300px*(16/9)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)] lg:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div style={{ "--duration": "50s", "--carousel-offset": "32px"}}>
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
}

const SmallVideoCarousel = ({ movies }) => {
  return (
    <div className="overflow-hidden flex space-x-5">
      <div className="flex space-x-5 animate-carousel-move relative left-[var(--carousel-offset, 0px)]">
        {movies.map((movie, index) =>
          <div
            key={`${movie.name} - ${index}`}
            className="md:w-[25vw] w-[45vw] shrink-0 aspect-video"
          >
            <Image
              alt={movie.name}
              src={movie.poster}
              width={315}
              height={200}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex animate-carousel-move space-x-5" aria-hidden="true">
        {movies.map((movie, index) =>
          <div
            key={`${movie.name} - ${index}`}
            className="md:w-[25vw] w-[45vw] shrink-0 aspect-video"
          >
            <Image
              alt={movie.name}
              src={movie.poster}
              width={315}
              height={200}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
