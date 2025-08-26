import React from 'react'

const NavBar = () => {
    const navItems = [
    {
        label: "Home",
        path:""
    },
     {
        label: "About",
        path:""
    },
     {
        label: "Portfolio",
        path:""
    },
     {
        label: "Contact",
        path:""
    },


]
  return (
    <> 
    <div className=' bg-transparent shadow-white/50 backdrop-blur-md  px-6 py-4 flex flex-row justify-between items-center'>
         <div className='w-full'>
           <h2 className='text-2xl px-12'> Ryan Logo</h2>
        </div>
        <div className='w-full  hidden md:block '>
            <nav className=''>
                <ul className='flex flex-row space-x-14 items-center px-30 '>
                    {
                        navItems.map((item, index) =>(
                            <li className="relative group" key={index}>
                                <a href="/" className="font-medium text-lg text-white group-hover:text-indigo-500">
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))
                    }
                   
                </ul>
            </nav>
        </div>
    </div>       
     </>
  )
}

export default NavBar