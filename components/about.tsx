"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
             <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About Us
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                    I'm Yusuf Young. I am a startup founder, advisor and investor. I am an LP (limited partner) in several funds, one being Tech Coast Angels in Orange County, CA. I frequently talk to college students about startups and business.
                </p>
                <p>
                    Fun fact: I own the <strong className="font-semibold text-gray-900">very first domain name ever registered</strong> on the Internet: <a href="#" className="text-blue-600 underline hover:text-blue-800 decoration-2 underline-offset-2">Symbolics.com</a> (March 15, 1985 registration date). My startup activities have been mentioned in <strong className="font-semibold text-gray-900">WSJ, Wired, CNN, Venture Beat, Tech Crunch, CBS, CNET, Gizmodo, Slashdot, PC World</strong> and dozens of others.
                </p>
                <p>
                    You can read a bit more about me here: <a href="#" className="text-blue-600 underline hover:text-blue-800 decoration-2 underline-offset-2">Napkin.com</a>. <br />
                    Connect with me on <a href="#" className="text-blue-600 underline hover:text-blue-800 decoration-2 underline-offset-2">LinkedIn</a>.
                </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
             <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl ring-1 ring-black/5">
                <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/founder.png" 
                    alt="Yusuf Young" 
                    className="object-cover w-full h-full scale-110 hover:scale-100"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
