"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Newsletter() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
       {/* Background Gradients */}
       <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-pink-50/20 to-transparent" />
       </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-10 md:p-16 lg:p-20 text-center max-w-5xl mx-auto relative overflow-hidden"
        >
           {/* Decorative background */}
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "100%" }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500" 
           />
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-8"
           >
              Join The Best Startup Newsletter!
           </motion.h2>
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="prose prose-lg text-gray-600 mx-auto mb-12 leading-relaxed max-w-3xl"
           >
               <p>
                   For a deep dive into business, life, tech, trends and more - from us to you. We don't share these newsletters anywhere online -- they are <strong className="font-semibold text-gray-900">private business insights</strong>. We don't hit send unless there's something interesting to discuss. <strong className="font-semibold text-gray-900">Join the group and instantly receive the newsletter that snapped thousands of us back into reality.</strong> There's 200,000+ of you here reading the best newsletter for startups and entrepreneurs!
               </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
           >
               <Input 
                 placeholder="Enter your email" 
                 className="h-14 bg-gray-50 border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-purple-500/20 rounded-xl text-lg px-6" 
               />
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Button className="h-14 px-8 bg-gray-900 text-white hover:bg-black text-lg font-medium rounded-xl shrink-0 shadow-lg hover:shadow-xl transition-all">
                     Join Newsletter!
                 </Button>
               </motion.div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
