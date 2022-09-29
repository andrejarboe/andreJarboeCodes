import Head from "next/head";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import { ProjectsSection } from "../components/ProjectsSection";

// import { Header } from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andre Jarboe Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <ProjectsSection ></ProjectsSection>
    </div>
  );
}
