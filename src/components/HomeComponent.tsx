import Link from 'next/link'
import React from 'react'

const HomeComponent = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      {/* Left side sub-container */}
      <div className=" mt-10 flex flex-row  mb-10 py-22 ">
        
        {/* Social icons / left column */}
        <div className='flex-none'>
          <div className="flex flex-col w-6 md:w-8 py-12 gap-4 md:gap-8">
            <img 
              src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png" 
              alt="Facebook" 
              className="w-full object-contain cursor-pointer hover-zoom-in rounded-2xl "
              loading='lazy'
            />
            <img 
              src="https://static.vecteezy.com/system/resources/previews/022/498/173/non_2x/3d-linkedin-logo-icon-isolated-on-transparent-background-free-png.png" 
              alt="LinkedIn" 
              className="w-full object-contain cursor-pointer rounded-xl hover-zoom-in "
              loading='lazy'
            />
            <img 
              src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png" 
              alt="Github" 
              className="w-full object-contain cursor-pointer rounded-2xl hover-zoom-in  "
              loading='lazy'
            />
          </div>
        </div>

        {/* Main content / right column */}
        <div className="w-64 flex-auto px-4 ml-2  ">
          <h2 className="text-5xl md:text-7xl  px-2 font-medium text-wrap  hover-zoom-in ">
            Hello I'm <span className="text-indigo-dark font-bold ">Ryan</span>
          </h2>

          <div className="flex items-center gap-4 mt-2">           
            <div className="w-16 h-[3px] ml-4  bg-gray-400 rounded-md bg-shadow-primary"></div>           
            <h2 className="text-lg text-gray-400 font-medium py-2 text-wrap text-shadow-primary">Web Developer</h2>
          </div>

          <div className="w-full  mx-auto ">
            <p className="text-left text-gray-400 font-normal px-4 py-2 text-lg text-wrap">
              I'm a Web Developer based in Philippines and I'm very passionate and dedicated to my work.
            </p>
          </div>

          <div className='w-full flex flex-row px-2 mt-4 md:px-4 gap-2'>
              <button className='bg-indigo-dark inline-flex items-center cursor-pointer bg-indigo-dark-hover rounded-md px-2 py-2  md:px-4 text-sm  md:text-base text-gray-200 font-medium hover-zoom-in '>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                </svg>
                Download CV
              </button>              
                <button className= 'border border-pink-900 items-center gap-2 inline-flex cursor-pointer text-sm md:text-base text-indigo-hover hover:shadow-white/20 hover:border-pink-700 rounded-md px-2 md:px-6 py-2 hover-zoom-in  bg-shadow-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                  </svg>
                  Contact
                </button>              
          </div>
        </div>
      </div>

      {/* Right side sub-container */}
      <div className="w-full mt-0 md:mt-10  hover-zoom-in  ">
          <Link href='/'>
            <img src="/images/dev.png" alt="Hero" className='object-contain w-full h-100 object-center ' />
          </Link>
      </div>

    </div>

  )
}

export default HomeComponent