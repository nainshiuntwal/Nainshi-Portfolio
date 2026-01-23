import React from 'react'
import { motion } from "framer-motion";
import { skills } from '../assets/skills';

const Skills = () => {
  return (
    
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 
              hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
             <div className='flex items-center mb-4'>
                 <skill.icon className="w-12 h-12  text-purple mr-6" />
              <h3 className="text-xl font-semibold ">{skill.title}</h3>
             </div>
             <p>{skill.description}</p>
             <div className='flex flex-wrap gap-2 '>
                {skill.tags.map((tech)=>(
                    <span key={tech} className='px-3 py-1 bg-dark-400 rounded-full txt-sm'>{tech}</span>
                ))}
             </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>

  )
}

export default Skills
