"use client";

import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

const SkillsBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
    { icon: <SiExpress className="text-white" />, name: "Express" },
  ];

  return (
    <section 
      ref={barRef}
      className={`relative w-full bg-[#050505] pt-4 pb-16 overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      
      {/* الخط العلوي */}
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent shadow-[0_0_15px_#06b6d4] transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="relative w-full">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-60"></div>

        <Marquee 
          gradient={false} 
          speed={isVisible ? 50 : 0} 
          pauseOnHover={true}
          className="py-4"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-6 mx-16 transition-all duration-700 ease-in-out"
            >
              <div className="text-5xl transition-all duration-500 brightness-95 saturate-100 group-hover:brightness-125 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                {skill.icon}
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] text-[#06b6d4] font-bold tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Skill
                </span>
                <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* الخط السفلي */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </section>
  );
};    

export default SkillsBar;