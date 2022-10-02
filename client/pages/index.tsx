import type { NextPage } from 'next'
import Head from 'next/head'

import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home
