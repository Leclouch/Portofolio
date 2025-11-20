'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <nav className="backdrop-filter backdrop-blur-lg fixed w-full z-20 top-0 start-0 bg-opacity-30 border-b border-gray-700">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
                    MWT
                </Link>
                
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary transition-transform"
                    aria-expanded={isOpen}
                >
                    <svg 
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                
                <div 
                    className={`absolute backdrop-filter backdrop-blur-lg top-16 right-0 w-half md:relative md:top-0 md:w-auto transition-all duration-300 ease-in-out md:translate-x-0 ${
                        isOpen 
                            ? 'translate-x-0   opacity-100' 
                            : 'translate-x-full  opacity-0 md:opacity-100'
                    }`}
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-neutral-primary md:rounded-none">
                        <li>
                            <Link href="/" className="block py-2 px-3 md:p-0 hover:text-blue-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="block py-2 px-3 md:p-0 hover:text-blue-400 transition">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/writeups" className="block py-2 px-3 md:p-0 hover:text-blue-400 transition">
                                Writeups
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts" className="block py-2 px-3 md:p-0 hover:text-blue-400 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// export default function Navbar() {
//   return (
//     <nav className="backdrop-filter backdrop-blur-lg fixed bg-opacity-30 top-0 w-full border-b border-gray-600">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
//           MWT
//         </Link>
//         <div className="flex gap-6">
//           <Link href="/" className="hover:text-blue-400 transition">Home</Link>
//           <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
//           <Link href="/writeups" className="hover:text-blue-400 transition">Writeups</Link>
//           <Link href="/contacts" className="hover:text-blue-400 no-underline hover:underline transition">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }