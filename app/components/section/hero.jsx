"use client"
import React, { useRef } from "react";
import Container from "../container";
import Button from "../button";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const videoContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background relative text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute left-0 -top-[--header-height] h-[200vh] w-full"
      >
        <Image
          src="/hero.png"
          alt="John Carter"
          height={1500}
          width={1500}
          className="sticky top-10 object-cover h-screen"
        />
      </motion.div>
      <Container className="relative z-10 pb-7 h-[--hero-height] ">
        <motion.div
        className="h-full flex flex-col justify-end items-start "
        variants={{
          hidden: {opacity: 0, transform: easeInOut, y: 10},
          visible: {opacity: 1, transform: easeInOut, y: 0}
        }}
        transition={{duration: 0.7}}
        whileInView="visible"
        exit="hidden"
        animate="hidden"
        viewport={{amount: 0.95}}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            All Apple Originals. <br />
            Only on Smart TV.
          </h1>
          <Button className="mb-16" size="large">
            Stream Now
          </Button>
          <p className="font-semibold"> Watch on the <Image src="/smarttvlogo.png" alt='Smart TV Logo' width={35} height={35} className=' bg-white rounded-xl inline-block' /> app</p>
        </motion.div>
      </Container>
    </div>
  );
}
 