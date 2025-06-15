
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    <section id="team" className="py-24 bg-black relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-white/20">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-white text-lg font-semibold bg-transparent">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
