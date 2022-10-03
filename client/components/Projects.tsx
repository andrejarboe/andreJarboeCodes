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
                    <a
                        key={project.title}
                        // href={project.href}
                        href="#"
                        className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                // src={project.imageUrl}
                                src={urlFor(project?.image).url()}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">
                                    <a 
                                        // href={project.category.href} 
                                        className="hover:underline">
                                        {/* {project.category.name} */}
                                        {project.technologies[0].title}
                                    </a>
                                </p>
                                <a 
                                    // href={project.href} 
                                    className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">
                                        {project.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {project.summary}
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="">
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        {/* <time dateTime={project.datetime}>{project.date}</time> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

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
        </div>
    )
}