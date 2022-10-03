import type { GetStaticProps } from 'next'
import Head from 'next/head'

import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Hero from '../components/Hero';
import Projects2 from '../components/Projects';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ projects, skills, pageInfo, experiences, socials }: Props) => {
  return (
    <div>
      <Head>
        <title>{`Andre's Portfolio | Home`}</title>
        <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero pageInfo={pageInfo} />
      <Projects2 projects={projects} />
      <Footer socials={socials} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}