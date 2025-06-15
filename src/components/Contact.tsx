
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact us
          </h2>
          <p className="text-xl text-gray-400">
            Tell us about your problem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="relative group h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlowingEffect
              blur={3}
              spread={20}
              proximity={50}
              className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 relative h-full">
              <CardHeader>
                <CardTitle className="text-white">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-lg">
                  China
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="relative group h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlowingEffect
              blur={3}
              spread={20}
              proximity={50}
              className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 relative h-full">
              <CardHeader>
                <CardTitle className="text-white">How can we help you?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 text-lg">
                  www@xyehr.cn
                </CardDescription>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Mail className="mr-2 w-4 h-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
