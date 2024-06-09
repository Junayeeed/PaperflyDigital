"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import AnimatedButton from "@/components/animated-button";
import Mouse from "@/components/mouse";
import icons from "@/constants/icons";
import Magnetic from "@/components/magnetic";
import TextMarquee from "@/components/text-marquee";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: icons.Instagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: icons.Twitter,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/",
    icon: icons.Linkedin,
  },

  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    icon: icons.Dribbble,
  },
];

export default function Hero() {
  const handleScroll = () => {
    const section = document.querySelector("#works");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={cn("section")}>
      <TextMarquee>Approach.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton handleClick={handleScroll}>
            <p className={cn("label-large")}>How we work</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            We are a team of creatives who are excited about unique ideas and
            help digital and fin-tech companies to create amazing identity by
            crafting top-notch UI/UX.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/posts/performance-boost.webp" alt="Hero" />
      </div>
    </section>
  );
}
