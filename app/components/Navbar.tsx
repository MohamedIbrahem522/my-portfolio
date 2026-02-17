"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  lang: "ar" | "en";
  setLang: React.Dispatch<React.SetStateAction<"ar" | "en">>;
  t: any;
}

const roles = [
  { ar: "مطور واجهات أمامية (React)", en: "Front-end (React)" },
  { ar: "مطور خلفية برمجية (Node.js)", en: "Back-end (Node.js)" },
  { ar: "مطور ويب متكامل (Full Stack)", en: "Full Stack Developer" },
  { ar: "مهندس ذكاء اصطناعي (YOLO)", en: "AI (YOLO)" },
];

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  if (!t || !t.nav) return null;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    const roleTimer = setInterval(() => setRoleIndex((prev) => (prev + 1) % roles.length), 3000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(roleTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl">
      {/* رجعنا الـ overflow-hidden للديسك توب فقط، وشلناه في الموبايل عشان اللينكات */}
      <div 
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`relative rounded-full transition-all duration-500 border backdrop-blur-md group/nav
          ${scrolled 
            ? "bg-black/60 py-2.5 md:py-3 border-[#06b6d4]/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-[#070708]/90 py-4 md:py-5 border-white/10 shadow-lg"
          } ${!isMenuOpen ? "overflow-hidden" : ""}`} 
      >
        {/* Spotlight Effect - ديزاينك الأصلي */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.12), transparent 40%)`,
          }}
        />

        <div className="relative z-10 px-5 md:px-8 flex justify-between items-center">
          
          {/* Logo Section - ديزاينك الأصلي */}
          <div className="flex items-center gap-3 group cursor-pointer shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#06b6d4] blur-xl opacity-20 group-hover:opacity-60 animate-pulse transition-opacity duration-500 rounded-full"></div>
              <div className="relative w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-[#06b6d4] via-[#0891b2] to-[#0e7490] rounded-xl flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:rotate-[12deg] group-hover:scale-110 transition-all duration-500 ease-out">
                <span className="text-xl md:text-2xl drop-shadow-md select-none">M</span>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] animate-ping"></div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="text-sm md:text-base font-black text-white tracking-tighter">MO.</span>
                <span className="text-sm md:text-base font-black text-[#06b6d4] tracking-tighter relative overflow-hidden">
                  IBRAHEM
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#06b6d4] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </span>
              </div>
              <div className="h-4 overflow-hidden mt-1 px-1.5 bg-white/5 rounded border border-white/5 relative">
  <div 
    className="flex flex-col transition-all duration-500 ease-in-out"
    style={{ 
      transform: `translateY(-${roleIndex * 16}px)`, // هنا الـ 16px هي بالظبط الـ h-4
    }}
  >
    {roles.map((role, i) => (
      <div
        key={i}
        className="h-4 flex items-center shrink-0" // shrink-0 عشان مفيش كلمة تضغط التانية
      >
        <span className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none block">
          {role[lang]}
        </span>
      </div>
    ))}
  </div>
</div>
            </div>
          </div>

          {/* Navigation Links - ديزاينك الأصلي */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
            {t.nav.map((item: any, i: number) => (
              <button
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2 rounded-full text-[10px] uppercase font-black tracking-widest text-gray-400 hover:text-white transition-all duration-300 group/link"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-[#06b6d4]/10 rounded-full scale-0 group-hover/link:scale-100 transition-transform duration-300" />
              </button>
            ))}
          </div>

          {/* Actions - ديزاينك الأصلي */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="group flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/40 hover:border-[#06b6d4] hover:bg-[#06b6d4]/20 transition-all duration-500 shadow-sm"
            >
              <Globe size={14} className="text-[#06b6d4] group-hover:rotate-[360deg] transition-transform duration-1000" />
              <span className="text-[10px] md:text-[11px] font-black text-white tracking-widest uppercase">
                {lang === "ar" ? "EN" : "AR"}
              </span>
            </button>

            <button className="md:hidden p-2 text-white hover:text-[#06b6d4]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        {/* رجعنا الديزاين اللي بيفتح من تحت الشريط مباشرة */}
        <div className={`
          absolute top-full left-0 w-full mt-4 p-3 rounded-[2.5rem] bg-[#070708]/95 backdrop-blur-2xl border border-white/10 
          md:hidden flex flex-col gap-1 items-center shadow-2xl transition-all duration-300 origin-top
          ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}>
          {t.nav.map((item: any, i: number) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-center py-4 text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-[#06b6d4] hover:bg-white/5 rounded-[1.5rem] transition-all"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;