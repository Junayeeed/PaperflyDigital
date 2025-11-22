import React from "react";
import cn from "classnames";
import styles from "./news.module.css";
import TextMarquee from "@/components/text-marquee";
import NewsPost from "@/components/news-post";
import { getSortedPosts } from "@/lib/posts";

export default function News() {
  const posts = getSortedPosts();


  return (
    <section className={cn("section")}>
      <TextMarquee>News.</TextMarquee>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("subheading-x-large", styles.title)}>
            Stay informed, stay ahead
          </div>
          <p className={cn("paragraph-x-large", styles.description)}>
            We are a team of creatives who are excited about unique ideas and
            help digital and fin-tech companies to create amazing identity by
            crafting top-notch UI/UX.
          </p>
        </div>
      </div>

      <div className={styles.posts}>
        {posts.slice(0, 4).map((post, index) => (
          <NewsPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
