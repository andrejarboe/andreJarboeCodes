import Head from 'next/head';
import type { GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header';
import { sanityClient, urlFor } from "../../sanity";

import { Social } from "../../typings";
import { fetchSocial } from "../../utils/fetchSocials";


type Props = {
    socials: Social[];
};

export default function projects({ }: Props) {
    return (
        <div>
            <Head>
                <title>Andre's Portfolio | Projects</title>
                <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </div>
    )
}

export const getStaticPaths = async () => { }

export const getStaticProps: GetStaticProps<Props> = async () => {
    const socials: Social[] = await fetchSocial();

    return {
        props: {
            socials,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10,
    }
}