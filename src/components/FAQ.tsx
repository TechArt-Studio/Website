
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "It is free?",
      answer: "Yes, it is free, ad-free, and open source."
    },
    {
      question: "Why is it so fast?",
      answer: "We use Vercel to deploy in multiple regions around the world and use Cloudflare CDN to cache data."
    },
    {
      question: "Is it ad-free?",
      answer: "Yes, we believe that only without ads can we give users the best experience."
    },
    {
      question: "Is it easy to deploy your project?",
      answer: "Of course! Deploying our project is very easy, you just need to follow the quick start section in the readme. If you have any questions, you can contact www@xyehr.cn"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FAQ
          </h2>
          <p className="text-xl text-gray-400">
            Have any questions? See here. We have collected common user questions.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 border-white/10 rounded-lg px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-white hover:text-gray-300 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
