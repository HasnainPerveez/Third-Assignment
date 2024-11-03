import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <div>
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
            <section className="h-screen text-gray-600 body-font bg-neutral-400">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Hasnain
                            <br className="hidden lg:inline-block font-bold"/>Creative Solution
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">We don&apos; or &#39;t just design—we create experiences that inspire and connect with your audience. Whether you need stunning graphics, an impactful website, or a complete brand overhaul, we&apos; or &#39;re here to make it happen.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-sky-950 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Log in</button>
                            <Link href="https://registration-form-nine-tau.vercel.app/">
                            <button className="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-950 rounded text-lg">Sign up</button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded"
                        alt="hero"
                        src="/images/green-heart.jpg"
                        width={720}
                        height={600}
                        />
                    </div>
                </div>
            </section>
            <section className="h-screen text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font sm:text-3xl text-2xl mb-4 font-bold text-gray-900">Our Services</h2>
                        <p className="mb-8 leading-relaxed">We offer a wide range of services to help you achieve your goals, including web development, graphic design, and digital marketing.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
// rm -rf .next
//h-screen w-screen overflow-auto scroll-smooth