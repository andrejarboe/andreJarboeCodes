import Head from 'next/head';
import type { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header';
import { sanityClient, urlFor } from "../../sanity";

import { Project, Social } from "../../typings";
import { fetchSocial } from "../../utils/fetchSocials";
import Footer from '../../components/Footer';

type Props = {
    socials: Social[];
    project: Project;
};

export default function projects({ project, socials }: Props) {
    return (
        <div>
            <Head>
                <title>Andre's Portfolio | Projects</title>
                <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <img
                className="h-40 w-full object-cover object-center"
                src={urlFor(project.image).url()!}
                alt={project.title}
            />
            <article>
                <h1 className=''>{project.title}</h1>
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