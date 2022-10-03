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

export default function custom404({ socials }: Props) {
    return (
        <div>
            <Head>
                <title>{`Andre's Portfolio | 404`}</title>
                <meta name="description" content="Andre Jarboe Software Engineer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className=" bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-tight text-red-500 sm:text-5xl">404</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">Page not found</h1>
                                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <a
                                    href="/"
                                    className="inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Go back home
                                </a>
                                <a
                                    href="/projects"
                                    className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Go to projects
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
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