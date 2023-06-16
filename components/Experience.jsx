import React from 'react'
import Image from 'next/image'
const Experience = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Course Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
<ol className="relative border-l border-gray-200 pt-12">                  
    <li className="mb-10 ml-6">            
         <span className="absolute flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full -left-5 ring-10  dark:ring-gray-900 dark:bg-blue-900">
            <Image 
            src="/jsm.png"
            alt='javascript master logo'
            width={20}
            height={20}
            className='w-7 h-7'>
            </Image>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold">React/React Native Development Course <span className="bg-slate-200 text-teal-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-teal-900  ml-3">Latest</span></h3>
        <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">JavaScript Mastery</h4>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Febuary 2023 - Present</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Developed and maintained web applications using React.js and other related technologies.
Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.
Implemented responsive design and ensuring cross-browser compatibility.
Participated in code reviews and provided constructive feedback to other developers.</p> 
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full -left-5 ring-10  dark:ring-gray-900 dark:bg-blue-900">
            <Image 
            src="/lab.png"
            alt='london app brewery logo'
            width={20}
            height={20}
            className='w-7 h-7'>
            </Image>
        </span>
        <h3 className="mb-1 text-lg font-semibold">MERN Stack Bootcamp</h3>
      <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">London App Brewery</h4>
        <time className=" block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020 - December 2020</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Completed a 12 - week intensive web development boot camp, specializing in MERN stack development
Demonstrated an exceptional grasp of the fundamentals of web development and the MERN stack
Developed a comprehensive understanding of web application architecture and design
Excelled in the use of modern web development tools and technologies, including MongoDB, Express.js, React.js, and Node.js
Acquired advanced skills in JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB, and Git
Collaborated effectively with a team of developers to deliver complex and innovative web applications
Received a completion certificate and recognition for outstanding performance in the boot camp
        </p>
    </li>
    <li className="ml-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full -left-5 ring-10  dark:ring-gray-900 dark:bg-blue-900">
            <Image 
            src="/fau.png"
            alt="Florida Atlantic University logo"
            width={20}
            height={20}
            className='w-7 h-7'>
            </Image>
        </span>
        <h3 className="mb-1 text-lg font-semibold">QuickStart Full Stack Web Dev Bootcamp</h3>
        <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Florida Atlantic Univeristy</h4>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2020 - August 2020</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">26 week program that started with basic concepts & concluded with the skills to execute real- life web development projects. Blended theory to build a solid foundation coupled with projects that allowed me to apply theory to practical industry scenarios. Learned both front - end and back - end programming languages like JavaScript, HTML5, React, MySQL and more.
</p>
    </li>
</ol>
</div>
</section>
  )
}

export default Experience