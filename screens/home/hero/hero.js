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
    name: "Linkedin",
    url: "https://www.linkedin.com/company/paperflydigital",
    icon: icons.Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/paperflydigital/",
    icon: icons.Instagram,
  },
  {
    name: "Twitter",
    url: "https://x.com/paperflydigital",
    icon: icons.Twitter,
  },
];

export default function Hero() {
  return (
    <section className={cn("section")}>
      <TextMarquee>Paperfly Digital.</TextMarquee>

      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <AnimatedButton anchor="works">
            <p className={cn("label-large")}>See our work</p>
          </AnimatedButton>
          <p className={cn("paragraph-2x-large", styles.description)}>
            Welcome to our design and development studio, where creativity meets
            expertise to shape digital brilliance.
          </p>
        </div>

        <div className={styles.stack}>
          <p className={cn("paragraph-large", styles.text)}>Find us on:</p>

          <div className={styles.socials}>
            {socials.map((social, index) => (
              <Magnetic key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <Mouse className={styles.mouse} />

        <img src="/images/hero-image.webp" alt="Hero" />
      </div>
    </section>
  );
}
