"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"

import { LanguageSelector } from "@/components/language-selector"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { name: "Meet Trellin", href: "#features" },
    { name: "FAQs", href: "#faq" },
    { name: "About Us", href: "#about" },
    { name: "Business Idea Generator", href: "#hero" },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="rounded-full border-[3px] border-purple-600 p-1.5 transition-transform group-hover:scale-105">
               <span className="block text-xl font-bold text-purple-600 leading-none">T</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Trellin</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="text-[15px] font-medium text-gray-600 transition-colors hover:text-purple-600"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <div className="hidden lg:block">
              <LanguageSelector />
           </div>
           <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0 sm:max-w-xs">
              <SheetTitle className="text-left text-lg font-bold mb-6 px-2">Menu</SheetTitle>
              <div className="flex flex-col gap-6 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-600 hover:text-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
