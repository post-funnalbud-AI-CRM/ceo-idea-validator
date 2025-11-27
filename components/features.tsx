"use client"

import { Button } from "@/components/ui/button"
import { Globe, MessageSquare, ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function Features() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-50/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20 max-w-4xl"
        >
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 mb-6">
                How Do I Launch a Startup?
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-8">
                Is My Idea Any Good?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                We all want to know if our business ides is worth purusing, and how to get it moving. Trellin helps you figure it out in just a few minutes. Trellin is trained on real market data and startup launch patterns. She'll perform AI based competitive analysis, customer analysis and she will find your unique value proposition. You'll get clarity, personalized feedback, and suggestions to make your idea more "market ready." Trellin even gives you assets to move forward - if you want to launch. It's fast, focused, and free.
            </p>
            <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-gray-100 w-full mt-16 origin-left" 
            />
        </motion.div>

        {/* Two Column Feature Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-32"
        >
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                <div className="flex items-center gap-3 text-gray-900">
                    <div className="p-2 bg-blue-50 rounded-lg">
                         <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Market Analysis with AI</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Trellin is the startup advisor we all wish we had at the beginning: fast, honest, and grounded in real market data. While you chat, Trellin researches your space in real time: identifying competitors, your customer profile, and how your idea fits into the market. Then she gives you a clear <strong className="font-semibold text-gray-900">value proposition</strong> to consider, and useful assets like next steps, launch advice, and helpful tools... all personalized to your idea.
                </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
                 <div className="flex items-center gap-3 text-gray-900">
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Join 200,000+ startup explorers!</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                    All 200,000 members are part of our startup newsletter: the world's largest group of people exploring ideas, testing what's possible, and thinking about what to build next. Each week, we share insights from Trellin, startup trends, and real conversations about business and life at the earliest stages. <strong className="font-semibold text-gray-900">You can even share your idea with the group if you want feedback or early traction.</strong> No pressure, just exploration.
                </p>
            </motion.div>
        </motion.div>

        {/* Image + Text Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-2xl ring-1 ring-gray-900/10"
             >
                <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                    alt="Startup Founder" 
                    className="object-cover w-full h-full"
                />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex flex-col gap-8"
             >
                <div>
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 mb-6">
                        How Do I Come Up With a Business Idea?
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
                        Our AI Helps Refine and Iterate Your Idea
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Trellin helps you pressure-test your startup idea, fast. She's trained to ask the right questions, surface blind spots, and analyze your idea against real market patterns. <strong className="font-semibold text-gray-900">Our AI will run a simulation of what your startup launch might look like, including customer feedback and conversation rates.</strong> See below for more info.
                    </p>
                </div>
                
                <div className="grid gap-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="pl-6 border-l-2 border-blue-500"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Simulate Customer Discussions and a Launch</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Trellin will run a quick simulation of what your startup launch might look like. She will surface potential concerns, objections and feedback from your target customer. Our AI tool will identify phrases on Google you can rank for, what smart pricing might look like and what your website conversion rate could be.
                        </p>
                    </motion.div>
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.6 }}
                       className="pl-6 border-l-2 border-purple-500"
                     >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Move Your Startup Idea Forward</h3>
                        <p className="text-gray-600 leading-relaxed">
                            After your chat, Trellin sends you a personalized guide with suggestions for how to improve your concept and explore it further. You'll also get helpful resources like an AI-generated landing page if you want momentum! She will analyze and score your idea against market data and the compeition in your space.
                        </p>
                    </motion.div>
                </div>
             </motion.div>
        </div>

      </div>
    </section>
  )
}
