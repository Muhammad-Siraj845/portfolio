import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-32 py-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-blue-100/20 dark:from-purple-900/20 dark:to-blue-900/20 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Hi, I&apos;m <span className="text-black dark:text-white">Muhammad Siraj</span>
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A passionate Full Stack Developer crafting beautiful and functional web experiences
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Transforming ideas into elegant solutions with modern technologies
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Link 
                href="#projects" 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/Muhammad-Siraj845" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-siraj-702382308/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a> */}
          </div>

         

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m a passionate developer with expertise in modern web technologies. 
                I love creating beautiful, responsive, and user-friendly applications 
                that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With a strong foundation in both frontend and backend development, 
                I bring ideas to life through clean code and intuitive design.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">React, Next.js, TypeScript</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Python, SQL</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">UI/UX, Figma, Tailwind</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', level: 90 },
              { name: 'Next.js', level: 85 },
              { name: 'TypeScript', level: 80 },
              { name: 'Node.js', level: 75 },
              { name: 'Python', level: 70 },
              { name: 'SQL', level: 65 },
              { name: 'UI/UX', level: 85 },
              { name: 'Git', level: 80 },
            ].map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src="/techvision.png"
                alt="TechVision Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">TechVision</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A modern tech blog platform built with Next.js and TypeScript.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a href="https://tech-vision-one.vercel.app/" className="text-purple-600 dark:text-purple-400 hover:underline">View Demo</a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src="/gourmet.png"
                alt="Gourmet Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Gourmet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A restaurant management system with online ordering capabilities.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Next.Js
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                  Typescript
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a href="https://gourmet-lm8m.vercel.app/" className="text-purple-600 dark:text-purple-400 hover:underline">View Demo</a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 w-full">
              <Image
                src="/hotelbooking.png"
                alt="Hotel Booking Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Hotel Booking</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A hotel reservation system with real-time availability checking.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Typescript
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a href="https://hotel-booking-orpin-kappa.vercel.app/" className="text-purple-600 dark:text-purple-400 hover:underline">View Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
