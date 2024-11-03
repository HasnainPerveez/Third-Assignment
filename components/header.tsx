import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-screen'>
      <nav className="bg-gray-800 text-white p-3 flex justify-between items-center mr-5">
        <h1 className="text-2xl font-bold">Hasnain Creative Solutions</h1>
        <div className="space-x-4">
          <Link className="hover:text-red-900 transition duration-300 text-2xl" href="/">Home</Link>
          <Link className="hover:text-red-900 transition duration-300 text-2xl" href="/services">Services</Link>
          <Link className="hover:text-red-900 transition duration-300 text-2xl" href="/about">About</Link>
          <Link className="hover:text-red-900 transition duration-300 text-2xl" href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
