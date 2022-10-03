import type { GetStaticProps } from 'next'
import { urlFor } from '../../sanity';

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { Project, Social } from "../../typings";
import { fetchSocial } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProjects";



type Props = {
    socials: Social[];
    projects: Project[];

};

export default function index({ projects, socials }: Props) {
    return (
        <div>
            <Head>
                <title>{`Andre's Portfolio | Projects`}</title>
                <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className='max-w-5xl mx-auto py-8'>
                <h2 className="text-left mx-4 uppercase md:mx-0 font-medium md:text-center text-secondary">All Projects
                </h2>
                <div>
                    {projects.map((project) => (

                        <div 
                        key={project._id}
                        className="relative">
                            <Link href={`/projects/${project?.slug.current}`}>
                                <a href="/lead_generation.html" className="flex flex-col md:flex-row gap-x-12 p-2 md:h-60 my-20 rounded-sm overflow-hidden shadow-sm hover:shadow-md border-gray-200 bg-white custom_color_border">

                                    <div className="h-60 md:h-auto md:w-2/5">
                                        <img className="w-full h-full object-cover" src={urlFor(project?.image).url()}
                                    alt={project?.title + ' image'}  />
                                    </div>
                                    <div className="">
                                        <div className="mt-2">
                                            <span className="font-semibold text-primary text-xs">   
                                            {project.technologies[0].title}
                                            </span>
                                        </div>
                                        <h2 className="font-workSans text-2xl font-semibold my-2 text-secondary">{project.title}</h2>
                                        <p className="text-sm mb-6 flex-grow max-w-prose text-secondary">
                                            {project?.summary}

                                        </p>
                                        <p>Read More</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <Footer socials={socials} />
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const socials: Social[] = await fetchSocial();
    const projects: Project[] = await fetchProjects();


    return {
        props: {
            socials,
            projects,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10,
    }
}