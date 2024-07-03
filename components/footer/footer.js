import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";
import TextMarquee from "../text-marquee";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Services",
    links: [
      { id: 1, title: "Works", url: "/works" },
      { id: 2, title: "About", url: "/about" },
      { id: 3, title: "Services", url: "/services" },
      { id: 4, title: "Approach", url: "/approach" },
      { id: 5, title: "News", url: "/news" },
    ],
  },
  {
    id: 2,
    title: "Socials",
    links: [
      { id: 6, title: "Facebook", url: "www.facebook.com/" },
      { id: 7, title: "Instagram", url: "www.instagram.com/" },
      { id: 8, title: "Twitter", url: "www.twitter.com" },
      { id: 9, title: "LinkedIn", url: "www.linkedin.com" },
    ],
  },
];

const guides = [
  { id: 1, title: "Privacy Policy", url: "/" },
  { id: 2, title: "Payment Policy", url: "/" },
  { id: 3, title: "Services", url: "/services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className={cn("section", styles.section)}>
        <TextMarquee gradient={false} color="var(--white)">
          GET IN TOUCH.
        </TextMarquee>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <Link
              href="/contact"
              className={cn("button-stroke", styles.button)}
            >
              Get in touch
            </Link>
            <div className={cn("paragraph-x-large", styles.description)}>
              Welcome to our design and development studio, where creativity
              meets expertise to shape digital brilliance.
            </div>
          </div>

          <div className={styles.wrapper}>
            {links.map((group) => (
              <div key={group.id} className={styles.column}>
                <div className={cn("subheading-medium", styles.title)}>
                  {group.title}
                </div>
                <div className={styles.links}>
                  {group.links.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      className={cn("label-medium", styles.link)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.bottom}>
        <div className={cn("container", styles.copyright)}>
          <div className={cn("label-small", styles.copy)}>
            Copyright © {currentYear} Paperfly Digital. All Rights Reserved.
          </div>

          <div className={styles.guides}>
            {guides.map((guide) => (
              <a
                key={guide.id}
                href={guide.url}
                className={cn("label-small", styles.guide)}
              >
                {guide.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
