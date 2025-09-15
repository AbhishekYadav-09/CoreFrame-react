import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  // Focus areas data
  const focusAreas = [
    {
      title: "MERN Stack Web Development",
      description: "Building full-stack applications with MongoDB, Express, React, and Node.js",
      icon: "💻"
    },
    {
      title: "Networking & Cybersecurity",
      description: "Learning CEH, deep networking concepts and security practices",
      icon: "🔒"
    },
    {
      title: "AI & Automation",
      description: "Creating Telegram bots, face swap tech, and subscription systems",
      icon: "🤖"
    },
    {
      title: "Cloud & Home Lab Server",
      description: "Experimenting with cloud technologies and home server projects",
      icon: "☁️"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-blue-600">Abhishek Yadav</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              First-year BTech student under AKTU, passionate about technology, coding, and building impactful projects.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md">
              Let's Connect
            </button>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white rounded-2xl p-2 shadow-xl">
              <div className="h-64 md:h-80 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <span className="text-6xl text-white">AY</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Journey</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently mastering the MERN stack, React, and modern backend concepts. Exploring AI integration (APIs and custom models), building Telegram bots, and working on authentication systems.
            </p>
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Personal Growth & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Growth</h2>
            <p className="text-gray-700">
              Overcame challenges of anxiety and mental struggle through gym discipline, self-awareness, and rebuilding mindset. Strong believer in consistency, fitness, and clarity of thought.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-gray-700">
              To become a skilled developer, create impactful projects, and build meaningful startups that solve real-world problems.
            </p>
          </motion.section>
        </div>

        {/* Extras */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white mb-16 md:mb-24"
        >
          <h2 className="text-2xl font-bold mb-4">Beyond The Binary</h2>
          <p className="mb-6">
            Loves solo traveling and storytelling, runs a creative YouTube channel called Beyond The Binary, starting with a storytelling playlist Main Aur Mera Raasta.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-lg transition-all duration-300">
            View My Channel
          </button>
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Interested in working together?</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md">
            View My Work
          </button>
        </motion.section>
      </div>
    </div>
  )
}