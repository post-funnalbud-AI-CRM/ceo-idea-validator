"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FAQ() {
  const faqs = [
    {
      question: "What is product market fit?",
      answer: "Product-market fit describes a scenario in which a company's target customers are buying, using, and telling others about the company's product in numbers large enough to sustain that product's growth and profitability."
    },
    {
      question: "How do I know if I have a good business idea?",
      answer: "A good business idea solves a real problem for a specific group of people who are willing to pay for a solution. Validation through customer interviews and landing page tests is key."
    },
    {
      question: "How do I validate my business or startup idea with no money?",
      answer: "You can talk to potential customers, create a landing page to collect emails, or use tools like Trellin to simulate feedback without spending money on ads."
    },
    {
      question: "How can AI help validate my startup idea?",
      answer: "AI can analyze market trends, competitor data, and simulate customer personas to give you objective feedback on your value proposition and potential risks."
    },
    {
      question: "Is the AI chat confidential?",
      answer: "Yes, your conversations and ideas are kept confidential and are not shared publicly."
    },
    {
      question: "What is a good startup score?",
      answer: "A score above 80 typically indicates a strong alignment between the problem, solution, and market, but execution is always the most important factor."
    },
    {
      question: "What should I do before building a startup?",
      answer: "Validate the problem, talk to potential users, and ensure there is a market willing to pay for your solution before writing a single line of code."
    }
  ]

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
       {/* Background Gradients */}
       <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-50/40 rounded-full blur-3xl" />
       </div>

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 mb-6"
        >
          Startup Validation Help
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 text-center"
        >
          FAQ and Quick Startup <br /> Advice
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-lg mb-16 max-w-2xl"
        >
           Curious what an MVP Is? Do you want to know how to find product market fit? Here are quick answers to common questions that our AI sees.
        </motion.p>
        
        <div className="w-full max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                    <AccordionItem value={`item-${index}`} className="border rounded-xl px-6 bg-white data-[state=open]:border-purple-200 data-[state=open]:bg-purple-50/30 transition-all duration-200">
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:text-purple-600 hover:no-underline py-6">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                        {faq.answer}
                    </AccordionContent>
                    </AccordionItem>
                </motion.div>
            ))}
            </Accordion>
        </div>
      </div>
    </section>
  )
}
