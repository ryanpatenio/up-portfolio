import React from 'react'

const AboutComponent = () => {
  return (
    <div className=' mt-2'>
        {/* Title Section */}
        <div className='text-center mb-4 md:mb-10'>
            <span className='text-5xl font-bold text-indigo-dark'>About Me</span>
            <div className='text-wrap flex flex-row items-center justify-center gap-2 py-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-stars text-pink-500 " viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
                <span className='text-lg text-gray-400 text-wrap text-shadow-primary'>Transforming ideas into digital experiences</span>

                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-stars text-pink-500" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
            </div>
        </div>

        <div className=' flex flex-row px-6 py-6 gap-2'>
            <div className=' flex flex-col flex-1 px-4 py-4'>
               <div className='mb-4'>
                    <h2 className='text-4xl font-bold text-indigo-dark'>Hello, I'm</h2>
                    <h2 className='text-5xl font-bold text-gray-200 mb-4'>Ryan A. Patenio</h2>
                    <p className='text-base/5 font-normal  text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius libero totam voluptate quisquam impedit temporibus perferendis! Nostrum cum sapiente adipisci nemo incidunt, facilis, tempore expedita dignissimos saepe 
                        impedit deserunt laborum. Quidem quam aliquam temporibus animi id, voluptas amet vitae!
                    </p>
                </div>
                <div className='flex flex-row  gap-2'>
                    <button className='bg-indigo-dark inline-flex items-center cursor-pointer bg-indigo-dark-hover rounded-md px-2 py-2  md:px-4 text-sm  md:text-base text-gray-200 font-medium hover-zoom-in '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                        </svg>
                        Download CV
                    </button>
                     <button className= 'border border-pink-900 items-center gap-2 inline-flex cursor-pointer text-sm md:text-base text-indigo-hover hover:shadow-white/20 hover:border-pink-700 rounded-md px-2 md:px-6 py-2 hover-zoom-in  bg-shadow-primary'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                        </svg>
                        View Projects
                    </button>    
                </div>
            </div>
            {/* Photo section */}
            <div className='hidden md:flex flex-1  items-center justify-center'>
                <img 
                src="/images/about-png.png" 
                alt=""
                className="h-64 w-64 rounded-full object-cover bg-shadow-primary hover-zoom-in cursor-pointer"
                loading="lazy"
            />
            </div>
        </div>

        {/* Transparent Card */}
        <div className='mt-6 px-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Card */}
            <div className='w-full bg-white/4 backdrop-blur-sm rounded-md py-4 px-6 cursor-pointer hover-zoom-in  '>
                <div className='flex justify-between items-center '>
                    <div className='rounded-full bg-white/20 px-2 py-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                        </svg>
                    </div>
                    <h2 className='text-3xl font-semibold text-slate-200'>11</h2>
                </div>                
                <div className='mt-4 '>
                    <h2 className='uppercase font-medium  mt-8 text-gray-200'>Total Projects</h2>
                    <div className='flex items-center justify-between'>                          
                        <p className='text-base text-gray-400'>Innovative Web solutions crafted</p>
                         <div className=' rounded-xl px-2 py-2 backdrop-blur-md bg-shadow-primary  cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right " viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </div>
                    </div>                 
                </div>
            </div>
             <div className='w-full bg-white/4 backdrop-blur-sm rounded-md py-4 px-6 cursor-pointer hover-zoom-in  '>
                <div className='flex justify-between items-center '>
                    <div className='rounded-full bg-white/20 px-2 py-2 '>
                        <img src="/images/ribbon-2.svg" alt=""
                            className='object-cover h-8 w-8 bg-white rounded-full'
                            loading='lazy'
                        />
                    </div>
                    <h2 className='text-3xl font-semibold text-slate-200'>8</h2>
                </div>                
                <div className='mt-4 '>
                    <h2 className='uppercase font-medium  mt-8 text-gray-200'>Certificates</h2>
                    <div className='flex items-center justify-between'>                          
                        <p className='text-base text-gray-400'>Professional skills validated</p>
                         <div className=' rounded-xl px-2 py-2 backdrop-blur-md bg-shadow-primary cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right " viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </div>
                    </div>                 
                </div>
            </div>
            <div className='w-full bg-white/4 backdrop-blur-sm rounded-md py-4 px-6 cursor-pointer hover-zoom-in  '>
                <div className='flex justify-between items-center '>
                    <div className='rounded-full bg-white/20 px-2 py-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                        </svg>
                    </div>
                    <h2 className='text-3xl font-semibold text-slate-200'>2</h2>
                </div>                
                <div className='mt-4 '>
                    <h2 className='uppercase font-medium  mt-8 text-gray-200'>Years of Experience</h2>
                    <div className='flex items-center justify-between'>                          
                        <p className='text-base text-gray-400'>Continues learning journey</p>
                         <div className=' rounded-xl px-2 py-2 backdrop-blur-md bg-shadow-primary cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right " viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                            </svg>
                        </div>
                    </div>                 
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutComponent