"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 -z-10 w-full h-full bg-purple-50">
          {/* Vibrant Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-300 via-purple-100 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-100 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-transparent opacity-70" />
          
          {/* Animated Blobs for extra depth - made darker and more visible */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 20, 0], 
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-[80px]" 
          />
          <motion.div 
             animate={{ 
              scale: [1, 1.2, 1],
              x: [0, -30, 0], 
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[80px]" 
          />
          <motion.div 
             animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 20, 0], 
              y: [0, 20, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[80px]" 
          />
          
          {/* Grid Overlay - lighter opacity */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-start">
          <motion.div 
            className="flex flex-col gap-8 pt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-7xl/none"
            >
              Validate and Score Your <br className="hidden lg:block" />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">Startup Ideas</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-4 bg-purple-200/60 -z-0 -rotate-1"
                ></motion.span>
              </span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="prose prose-lg text-gray-600 max-w-[600px] leading-relaxed">
              <p className="mb-6">
                Is my new product idea worth launching? Trellin is an AI tool that helps you <strong>write a value proposition, analyze the competition, find your customers</strong> and <strong>validate your business idea</strong>.
              </p>
              <p className="mb-6">
                Our AI tool will <strong>simulate customer feedback and a product launch</strong>, score and grade your idea and it will give you helpful launch advice.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Button className="h-14 px-8 bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 text-base font-medium rounded-xl">
                    Generate an Idea for Me
                </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
                <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden ring-2 ring-transparent hover:ring-purple-200 transition-all z-0 hover:z-10">
                             <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                         </div>
                    ))}
                </div>
                <div className="text-sm text-gray-600">
                    Join the <strong>294,339</strong> entrepreneurs exploring ideas with Trellin!
                </div>
            </motion.div>
            
             <motion.a 
               variants={itemVariants}
               href="#" 
               className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow w-fit"
             >
                 <span className="text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded uppercase tracking-wider">Featured on</span>
                 <div className="flex items-center gap-1 font-semibold text-gray-900">
                    <span className="bg-[#DA552F] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">P</span>
                    <span>Product Hunt</span>
                 </div>
                 <div className="flex flex-col items-center leading-none border-l pl-3 border-gray-200">
                     <span className="text-xs font-bold">▲</span>
                     <span className="text-xs font-bold">124</span>
                 </div>
             </motion.a>

          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
            className="flex justify-center lg:justify-end w-full"
          >
            <Card className="w-full max-w-[500px] bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              <CardHeader className="text-center space-y-2 pt-8 pb-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2 text-2xl"
                >
                    👉
                </motion.div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                    Is My Idea Any Good?
                </CardTitle>
                <p className="text-gray-500 font-medium">Let's Find Out!</p>
              </CardHeader>
              <CardContent className="space-y-5 pb-8 px-6 md:px-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">
                    What is Your First Name?
                  </label>
                  <Input id="name" placeholder="Enter your name..." className="h-12 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-semibold text-gray-700 ml-1">
                    Do you Have a Website?
                  </label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                   <label htmlFor="idea" className="text-sm font-semibold text-gray-700 ml-1">
                    What is Your Startup Idea?
                  </label>
                  <Textarea 
                    id="idea" 
                    placeholder="I want to start a business that..." 
                    className="min-h-[100px] bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl resize-none" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="customer" className="text-sm font-semibold text-gray-700 ml-1">
                    Who is the Ideal Customer for This?
                  </label>
                  <Input id="customer" placeholder="Eg: Small businesses" className="h-12 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl" />
                </div>

                 <div className="space-y-2">
                  <label htmlFor="problem" className="text-sm font-semibold text-gray-700 ml-1">
                    What Problem Does Your Idea Solve?
                  </label>
                  <Input id="problem" placeholder="Eg: Supply chain inefficiencies" className="h-12 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl" />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full h-12 bg-gray-900 text-white hover:bg-black text-lg font-medium rounded-xl mt-4 shadow-lg hover:shadow-xl transition-all">
                    Submit
                    </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
