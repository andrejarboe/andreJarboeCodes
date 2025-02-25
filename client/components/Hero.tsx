import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    return (
        <section className="mt-12 mx-auto container max-w-7xl py-12 px-4 flex">
            <div className="w-full lg:w-3/5 flex flex-col my-auto ">
                <p className="text-2xl font-light">
                    Hi, my name is <span className="text-primary">{pageInfo.name},</span> I&apos;m a
                </p>
                <h1 className="text-6xl font-extrabold text-[#3f3d56]">{pageInfo.role}</h1>
                <p className="text-lg text-gray-600 font-light leading-relaxed pt-8">
                    {pageInfo?.heroInfo}
                </p>

                <div className="mt-8 flex ">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href={pageInfo?.button1Link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
                        >
                            {pageInfo?.heroButton1Text}
                        </a>
                    </div>
                    <div className="ml-3 inline-flex">
                        <a
                            href={pageInfo?.button2Link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary/10 px-5 py-3 text-base font-medium text-red-700 hover:bg-primary/25"
                        >
                            {pageInfo?.heroButton2Text}

                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/5 justify-end">
                <img
                    className="hidden md:block"
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt="abstract pattern"
                />
            </div>
        </section>
    )
}
