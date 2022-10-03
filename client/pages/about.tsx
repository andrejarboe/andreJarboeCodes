import type { GetStaticProps } from 'next'

import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { Social } from "../typings";
import { fetchSocial } from "../utils/fetchSocials";


type Props = {
    socials: Social[];
};

export default function about({ socials }: Props) {
    return (
        <div>
            <Head>
                <title>{`Andre's Portfolio | About`}</title>
                <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <h1> About page</h1>
            <Footer socials={socials} />
        </div>
    )
}

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