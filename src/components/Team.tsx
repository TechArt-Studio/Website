
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: "Happyleibniz",
      role: "Founder & Developer",
      initials: "HL",
      avatar: "https://cdn.xyehr.cn/images/121920485.png"
    },
    {
      name: "Evan Huang",
      role: "Founder & Marketing & Developer", 
      initials: "EH",
      avatar: "https://e.xyehr.cn/Evan.jpg"
    }
  ];

  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            Our Developer Team
          </p>
          <p className="text-lg text-gray-500">
            Tech-Art is composed of many programming enthusiasts, thanks to every contributor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="relative h-full rounded-2xl border border-white/10 p-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="relative flex flex-1 flex-col justify-between gap-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4 bg-white/20">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-white text-lg font-semibold bg-transparent">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-3 text-center">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
