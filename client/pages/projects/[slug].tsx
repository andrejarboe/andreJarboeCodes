import Head from 'next/head';
import type { GetStaticProps } from 'next'
import React from 'react'
import PortableText from "react-portable-text";
import Header from '../../components/Header';
import { sanityClient, urlFor } from "../../sanity";

import { Project, Social } from "../../typings";
import { fetchSocial } from "../../utils/fetchSocials";
import Footer from '../../components/Footer';
import ProjectBanner from '../../components/ProjectBanner';
import Link from 'next/link';

type Props = {
    socials: Social[];
    project: Project;
};

export default function projects({ project, socials }: Props) {
    return (
        <div>
            <Head>
                <title>{`Andre's Portfolio | Projects`}</title>
                <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/* <ProjectBanner />
            <img
                className="h-40 w-full object-cover object-center"
                src={urlFor(project.image).url()!}
                alt={project.title}
            /> */}
            <article className="max-w-3xl mx-auto p-5">
                <h1 className='text-3xl mt-10 mb-3'>{project.title}</h1>
                <div className="flex">
                    <div
                        className='text-xl mt-4 mb-3'
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer mt-3 shadow sm:mt-0  focus:outline-none rounded py-3 px-4 text-secondary border border-secondary flex justify-center items-center text-base hover:bg-gray-200 bg-transparent"

                            href={project.linkToBuild}
                        >
                            Live Preview
                        </a>
                    </div>
                    <div
                        className='text-xl mt-4 mb-3'
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer mt-3 shadow sm:mt-0 sm:ml-3 focus:outline-none rounded py-3 px-4 text-secondary border border-secondary flex justify-center items-center text-base hover:bg-gray-200 bg-transparent"
                            // className='text-xl mt-4 mb-3 border border-secondary '
                            href={project.linkToRepo}
                        >
                            Link to GitHub Repo
                        </a>
                    </div>
                </div>
                <hr className="my-8 h-px bg-secondary border-0 dark:bg-gray-700"></hr>
                <img
                    // className='h-64 object-cover object-center mx-auto'
                    className="w-full h-52 md:h-64 lg:h-96 object-cover rounded"
                    src={urlFor(project.image).url()!}
                    alt={project.title}
                />

                <div className="mt-10 px-12">
                    <PortableText
                        className=""
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={project.body}
                        serializers={{
                            h1: (props: any) => (
                                <h1 className="text-2xl font-bold my-5" {...props} />
                            ),
                            h2: (props: any) => (
                                <h1 className="text-xl font-bold my-5" {...props} />
                            ),
                            li: ({ children }: any) => (
                                <li className="ml-4 list-disc">{children}</li>
                            ),
                            link: ({ href, children }: any) => (
                                <a href={href} className="text-blue-500 hover:underline">
                                    {children}
                                </a>
                            ),
                        }}
                    />
                </div>
            </article>
            <Footer socials={socials} />

        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "project"]{
        _id,
        slug {
          current
        }
      }`;

    const projects = await sanityClient.fetch(query);

    const paths = projects.map((project: Project) => ({
        params: {
            slug: project.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const query = `*[_type == "project" && slug.current == $slug][0]{
        ...,
        technologies[]->
      }`;

    const project = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!project) {
        return {
            notFound: true,
        };
    }


    const socials: Social[] = await fetchSocial();

    return {
        props: {
            project,
            socials,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10,
    }
}