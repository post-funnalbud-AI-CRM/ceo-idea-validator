"use client"

import Link from "next/link"
import { Twitter, Youtube, Linkedin, Video } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-gray-100 py-16 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
             <div className="flex items-center gap-2.5">
                <div className="rounded-full border-[2.5px] border-purple-600 p-1">
                   <span className="block text-lg font-bold text-purple-600 leading-none">T</span>
                </div>
                <span className="text-lg font-bold tracking-tight text-gray-900">Trellin</span>
            </div>
            <span className="hidden md:inline-block text-gray-300">|</span>
            <span className="text-gray-500 text-sm font-medium">Irvine, CA</span>
        </div>

        <div className="flex items-center gap-8">
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                 <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                 <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                    <Video className="h-5 w-5" /> {/* Placeholder for TikTok */}
                    <span className="sr-only">TikTok</span>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                 <Link href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500 font-medium">
             <div className="flex gap-6">
                 <Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link>
                 <Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
             </div>
             <span className="text-gray-400">© Trellin - 2025</span>
        </div>
      </div>
    </motion.footer>
  )
}
