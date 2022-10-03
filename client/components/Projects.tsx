import Link from 'next/link';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
    projects: Project[]
}

export default function Projects2({ projects }: Props) {

    return (
        <div className='flex flex-col max-w-7xl mx-auto px-4'>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                My Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2  md:pt-12 lg:grid-cols-3">
                {projects.map((project) => (
                    <Link
                        key={project._id}
                        href={`/project/${project?.slug.current}`}
                    >
                        <div className="border rounded-lg group cursor-pointer overflow-hidden">
                            <div>
                                <img
                                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                    src={urlFor(project?.image).url()}
                                    alt={project?.title + ' image'} />
                            </div>
                            <div className="flex justify-between p-5 bg-white">
                                <div>
                                    <p className="text-sm font-medium text-primary">
                                        {project.technologies[0].title}
                                    </p>
                                    <p className="text-xl font-semibold text-secondary">{project.title}</p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {project?.summary}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div >

            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">

                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                        href="#"
                        className="focus:outline-none rounded py-3 px-4 text-secondary border border-secondary flex justify-center items-center text-base hover:bg-gray-200 bg-transparent"
                    >
                        View All
                    </a>
                </div>
            </div>
        </div >
    )
}
