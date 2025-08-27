"use client"

import React, { useState } from 'react'
import { projectsData, techStacks, portfolioTabs } from '@/data/projects-data';
import Link from 'next/link';


const PortfolioComponent = () => {
    const [activeTab, setActiveTab] = useState<string>("projects");

    const tabs = portfolioTabs();
    const projects = projectsData();
    const stacks = techStacks();
   
  return (
    <div className=' mt-6 px-6 py-6'>
        {/* Title */}
        <div className='flex flex-col items-center justify-center px-6 py-6'>
            <h2 className='text-5xl text-indigo-dark font-bold text-center'>Portfolio Showcase</h2>
            <p className='text-base py-2 md:text-base/10 text-gray-400 text-center text-wrap'>
                Explore my journey through projects and technical expertise. Each sections represents a milestone in my continuous learning path.
            </p>
        </div>
        
        {/* Tabs */}
        <div className='mt-6 max-w-4xl mx-auto  flex flex-row gap-4 py-4'>
            {/* tab cards */}
            {
                tabs.map((tab)=> (
                    <div key={tab.id}
                    onClick={()=> setActiveTab(tab.id)}
                     className={`w-full rounded-xl ${activeTab === tab.id ? 'active-card' : 'not-active-card'}  px-4 py-2 backdrop-blur-sm cursor-pointer`}>
                        <div className='flex flex-col items-center text-center'>
                           {tab.icon}
                            <h2 className='text-base md:text-lg font-medium mt-1 text-gray-300'>{tab.label}</h2>
                        </div>
                    </div>
                ))
            }
                                   
        </div>

        {/* Content */}

        {/* Projects Content */}
        <div className=' mx-auto mt-2 max-w-5xl '>

            {activeTab === "projects" && 
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {/* Cards */}
                    {
                        projects.map((project,index) => (
                            <div
                                key={index}
                                className="px-6 py-6 rounded-md bg-white/5 backdrop-blur-sm flex flex-col h-full"
                                >
                                <div className="flex-1 flex flex-col gap-2">
                                    <img
                                    src={project.imgSrc}
                                    alt={project.title}
                                    loading="lazy"
                                    className="object-contain w-full h-full rounded-md object-center"
                                    />
                                    <h2 className="text-lg font-medium text-gray-200 mt-2 md:mt-4">
                                    {project.title}
                                    </h2>
                                    <p className="text-gray-400 text-base text-wrap">{project.details}</p>
                                </div>

                                    <div className="flex justify-end mt-4 md:mt-6">
                                       
                                        <Link href={`/projects`}>
                                            <button className="border font-medium items-center inline-flex gap-2 border-pink-900 px-4 md:px-8 py-1 rounded-md cursor-pointer text-sm md:text-base text-indigo-hover hover:shadow-white/20 hover:border-pink-700 hover-zoom-in bg-shadow-primary">
                                                Details
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-arrow-right"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                    fillRule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                    />
                                                </svg>
                                                </button>
                                        </Link>
                                    </div>
                            </div>

                        ))
                    }           
                </div>
            }
            {/* End of Projects Card */}

            {/* Tech Stack Cards */}
            {activeTab === "techStacks" &&
                <div className=' grid grid-cols-3 md:grid-cols-6 gap-4'>
                    {/* Cards */}
                    {stacks.map((stack,index)=> (
                        <div key={index} className='rounded-xl bg-white/4 flex flex-col px-2 py-4 h-full'>
                            <div className='flex-1 items-center justify-center '>
                                <img 
                                    src={stack.imgSrc}
                                    alt=""
                                    loading='lazy'
                                    className='object-contain w-full rounded-md h-16'
                                />
                            </div>
                            <div className='mt-2 text-center'>
                                <h2 className='text-base font-medium text-gray-200'>{stack.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            
            }
            {/* End of Tech Stacks  */}
        </div>

    </div>
  )
}

export default PortfolioComponent