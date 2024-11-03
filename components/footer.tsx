import React from 'react'
// import Link from 'next/link'

export default function Footer() {
  return (
    // <footer className="bg-gray-800 text-white py-4 mt-8">
    //   <div className="container mx-auto text-center">
    //     <p className="text-sm">© 2024 My Website. All rights reserved.</p>
    //   </div></footer>

    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl">Creative_Solution</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Creative Solution—
      <a href="https://second-assignment-theta.vercel.app/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Solution</a>
    </p>
  </div>
</footer>
  )
}
