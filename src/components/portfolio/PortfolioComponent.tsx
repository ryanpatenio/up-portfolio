"use client"

import React, { useState } from 'react'
import { projectsData, techStacks } from '@/data/projects-data';


type Tab = {
  id: string;
  label: string;
  icon: React.ReactElement;
};

const PortfolioComponent = () => {
    const [activeTab, setActiveTab] = useState<string>("projects");

    const tabs: Tab[] = [
        { 
            id: "projects", label: "Projects",
            icon: (
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-code-slash text-gray-400" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                </svg>
            ),
         },
        { 
            id: "techStacks", label: "Tech Stacks",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-boxes text-gray-400" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                </svg>
            ),
        },
    ];
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
                                className='object-contain w-full rounded-md h-20'
                            />
                        </div>
                        <div className='mt-2 text-center'>
                            <h2 className='text-base font-medium text-gray-200'>{stack.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
            
            }
        </div>

    </div>
  )
}

export default PortfolioComponent