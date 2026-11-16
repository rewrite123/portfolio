import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";
import portrait from "../assets/pfp.jpeg";

const hobbies: { title: string; detail: ReactNode }[] = [
  { title: "Rust & Yew", detail: "Exploring systems programming and building small web projects with Rust and WebAssembly." },
  { title: "Microcontrollers", detail: "Tinkering with ESP32 boards, sensors, and the little bits of software that meet the physical world." },
  { title: "Cybersecurity", detail: <>Curious about how systems fail—and, of course, <a href="https://www.youtube.com/watch?v=qz5i171h_no" target="_blank" rel="noreferrer">who is notorious hackerman 4chan?</a></> },
  { title: "AI & machine learning", detail: "Following new tools closely and looking for practical, responsible ways to make them useful." },
  { title: "Linux", detail: "At home in the terminal. Ubuntu has been a longtime favorite." },
  { title: "Decentralized tech", detail: "Keeping an eye on open protocols and ideas that give people more ownership of their tools." },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Isaac Hormel — From game modding to building software</title>
        <meta name="description" content="From hacking games to building useful software: meet independent software engineer Isaac Hormel." />
        <link rel="canonical" href="https://isaachormel.com/about" />
      </Helmet>
      <section className="page-hero">
        <div className="page-wrap">
          <p className="eyebrow">ABOUT ISAAC</p>
          <h1>From hacking games to building things that <span>matter.</span></h1>
          <p>See how stubborn curiosity became a career in turning difficult problems into software people can rely on.</p>
        </div>
      </section>
      <section className="section page-wrap">
        <div className="story-grid">
          <aside className="story-aside">
            <img src={portrait} alt="Portrait of Isaac Hormel" width={900} height={900} loading="lazy" />
            <p className="eyebrow" style={{ marginTop: "1rem" }}>ENGINEER · BUILDER · LIFELONG LEARNER</p>
          </aside>
          <article className="story-copy">
            <p className="eyebrow">THE SHORT VERSION</p>
            <h2 className="page-title">I like making things work better.</h2>
            <p>I’m a full-stack software engineer who enjoys connecting the dots between a business problem and a useful product. I’ve worked on APIs, customer-facing apps, internal tools, data-heavy workflows, and the infrastructure that keeps them running.</p>
            <p>My path into software started with game modding more than fifteen years ago. I was the kid who wanted to know how the game worked, then wanted to change it, then wanted to build something of my own. That stubborn curiosity became a habit: take things apart, understand the problem, and keep working until the solution feels right.</p>
            <p>Over the years, I’ve taken on work as a project lead, senior developer, consultant, and designer. The titles changed; the part I enjoy most stayed the same—working with people to shape a real need into software that makes their day easier.</p>
            <h2>Good software starts with listening.</h2>
            <p>I believe the best outcomes come from clear communication, realistic milestones, and honest trade-offs. Before writing code, I want to understand who the software is for and what success looks like. From there, I can help plan a sensible first version, build it, and keep improving it as the business grows.</p>
            <p>That means no mystery process and no technology for technology’s sake. Just thoughtful engineering, practical collaboration, and a product you can feel confident putting to work.</p>
          </article>
        </div>
      </section>
      <section className="section page-wrap">
        <div className="section-heading">
          <p className="eyebrow">OFF THE CLOCK</p>
          <h2>A few things I’m curious about.</h2>
          <p>Side interests keep me learning and often lead to useful new ways of thinking about software.</p>
        </div>
        <div className="hobby-grid">
          {hobbies.map((hobby) => (
            <article className="hobby-card" key={hobby.title}>
              <h3>{hobby.title}</h3>
              <p>{hobby.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
