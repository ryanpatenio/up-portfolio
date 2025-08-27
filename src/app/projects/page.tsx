'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import Modal from '@/components/portfolio/project-Modal';

const page = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);


     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleNext = () => {
        setLoading(true);
        const nextStep = (step + 1) % items.length;

        // Preload the next image
        const img = new Image();
        img.src = items[nextStep];
        img.onload = () => {
        setStep(nextStep);
        setLoading(false);
        };
    };

    const items = [
        "https://uicookies.com/wp-content/uploads/2018/06/newspaper-free-magazine-website-templates.jpg",
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/600/400?random=2",
  ];

//   const { id } = useParams(); // get id from URL
//   const project = projects.find((p) => p.id === id);

//   const [step, setStep] = useState(0);

//   if (!project) return <p>Project not found</p>;
    
  return (
    <div className=' bg-transparent  min-h-screen px-6 py-6'>       
        <div className=' max-w-5xl mx-auto'>
             {/* Navigation */}
            <div className=' bg-white/2 rounded-md flex flex-row justify-start  items-center gap-6'>
                <button
                    onClick={()=> router.back()}
                className='border-1 border-gray-700 px-6 py-2 bg-white/10 rounded-md text-base items-center inline-flex cursor-pointer text-indigo-dark hover-zoom-in hover:border-gray-500 gap-2'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                        Back
                </button>
                <h2 className='text-base text-gray-400'>Projects</h2>
                <strong className='text-lg text-gray-400'>|</strong>
                <h2 className='text-lg font-medium text-gray-200'>PayBuddy Wallet App</h2>
            </div>

             {/* Content */}
            <div className='mt-5  flex flex-col-reverse md:flex-row gap-4 py-6'>

                <div className='flex flex-1 flex-col h-full'>                    
                    <div className='flex-1 '>
                        <h2 className='text-4xl text-gray-200 font-semibold'>PayBuddy Wallet App</h2>
                        <div className='mt-4 mb-4 w-24 h-1 bg-indigo-dark rounded-md bg-shadow-primary'></div>

                        <p className='text-base text-wrap py-2  text-gray-300'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam soluta ad id sequi. Accusamus, facilis, ullam aperiam fuga recusandae eveniet nihil, aspernatur veritatis nobis molestiae perspiciatis? Dolorem beatae quidem sed tempora natus, vitae hic eveniet fugiat porro illum 
                           consectetur dolore in mollitia ipsum blanditiis repellendus nulla? Numquam, officiis possimus?
                           
                        </p>
                    </div>
                    
                    <div className=' bg-white/2 rounded-md mt-4  w-full flex flex-row  gap-2 px-2 py-2'>
                     {/* Cards */}
                        <div className='bg-white/4 cursor-pointer hover:bg-white/10 w-full rounded-md flex items-center flex-row gap-4 px-4 py-2'>
                            <div className='flex-none'>
                                 <div className='rounded-full bg-white/20 px-2 py-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                                    </svg>
                                </div>
                            </div>
                           
                            <div className='flex-1'>
                                <h2 className='text-gray-200 font-semibold text-lg'>9</h2>
                                <p className='text-base text-gray-400'>Total Technologies</p>
                            </div>
                        </div>
                        
                        <div className='bg-white/4 w-full hover:bg-white/10  cursor-pointer  rounded-md flex items-center flex-row gap-4 px-4 py-2 '>
                            <div className='flex-none'>
                                 <div className='rounded-full bg-white/20 px-2 py-2 '>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                                </div>
                            </div>
                           
                            <div className='flex-1'>
                                <h2 className='text-gray-200 font-medium text-lg'>Github</h2>
                               
                            </div>
                        </div>

                    </div>

                </div>

                <div
                    onClick={()=> setIsOpen(true)}
                className='flex-1 flex items-center rounded-xl hover-zoom-in cursor-pointer justify-center'>
                    <img 
                        src="https://uicookies.com/wp-content/uploads/2018/06/newspaper-free-magazine-website-templates.jpg"
                        alt=""
                        className='object-contain w-full h-80  rounded-md'
                        loading='lazy'
                     />
                </div>
            </div>

            <div className=' flex flex-col-reverse md:flex-row gap-4 py-6'>
                <div className=' flex-1'>
                    <div className='bg-transparent w-full inline-flex gap-2 '>
                        <div className='px-2 py-2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-code-slash " viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                        </svg>
                        </div>
                        <h2 className='text-xl flex items-center justify-center text-gray-200 font-semibold'>Technologies Used</h2>
                    </div>
                    <div className=' grid grid-cols-2 md:grid-cols-3 gap-2 px-2 py-2'>
                        {/* Cards */}
                        <div className=' bg-white/5 hover-zoom-in cursor-pointer   rounded-md px-4 py-2 inline-flex justify-center items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                            </svg>
                             <h2 className='text-gray-200 text-sm md:text-base font-semibold'>React JS</h2>
                        </div>
                        <div className=' bg-white/5  hover-zoom-in cursor-pointer  rounded-md px-4 py-2 inline-flex justify-center items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                             <h2 className='text-gray-200 text-sm md:text-base font-semibold'>Node JS</h2>
                        </div>
                        <div className=' bg-white/5 cursor-pointer   hover-zoom-in  rounded-md px-4 py-2 inline-flex justify-center items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
                            </svg>
                             <h2 className='text-gray-200 text-sm md:text-base font-semibold'>Tailwind CSS</h2>
                        </div>
                        <div className=' bg-white/5 hover-zoom-in cursor-pointer   rounded-md px-4 py-2 inline-flex justify-center items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                             <h2 className='text-gray-200 text-sm md:text-base font-semibold'>React-Toast</h2>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='bg-white/2  rounded-md flex-1 px-2 py-2'>
                    <div className='flex flex-col py-6 px-6'>
                        <div className='inline-flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stars text-pink-500" viewBox="0 0 16 16">
                                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                            </svg>
                            <h2 className='text-lg text-gray-200 font-semibold'>Key Features</h2>
                        </div>
                        <div className='flex-1'>
                            <ul className='list-disc marker:text-pink-500 px-4 py-4'>
                                <li className='mt-2 mb-2 text-gray-300'>Customize the message</li>
                                <li className='mt-2 mb-2 text-gray-300'>Send message to multiple users</li>
                                <li className='mt-2 mb-2 text-gray-300'>Set custom delay intervals between messages for controlled messaging</li>
                                <li className='mt-2 mb-2 text-gray-300'>Send money to different users</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Modal */}
        {isOpen && (
            <Modal
                modalState={isOpen}
                loading={loading}
                onClose={() => setIsOpen(false)}
                onNext={handleNext}
            >
                <img
                src={items[step]}
                alt="modal content"
                className="w-full h-80 object-contain rounded-md"
                />
            </Modal>
        )}
        
    </div>
  )
}

export default page