"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsBar from "./components/SkillsBar";
import Skills from "./components/Skills"; 
import Experience from "./components/Experience"; 
import Projects from "./components/Projects"; 
import Contact from "./components/Contact";  

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // محتوى النصوص للغتين
  const content = {
    en: {
      nav: [
        { name: "Home", id: "Home" },
        { name: "Skills", id: "Skills" },
        { name: "Experience", id: "Experience" },
        { name: "Projects", id: "Projects" }, 
        { name: "Contact", id: "Contact" },
      ],
      hero: {
        greeting: "Hi, I'm",
        desc: "Building dynamic web apps with React.js & Node.js | Exploring the frontiers of AI & Computer Vision (YOLO).",
        cvBtn: "Download CV",
        contactBtn: "Let's Talk",
      },
    },
    ar: {
      nav: [
        { name: "الرئيسية", id: "Home" },
        { name: "المهارات", id: "Skills" },
        { name: "الخبرة", id: "Experience" },
        { name: "المشاريع", id: "Projects" }, 
        { name: "اتصل بي", id: "Contact" },
      ],
      hero: {
        greeting: "أهلاً، أنا",
        desc: "أقوم ببناء تطبيقات ويب ديناميكية باستخدام React.js و Node.js | مع استكشاف آفاق الذكاء الاصطناعي والرؤية الحاسوبية (YOLO).",
        cvBtn: "تحميل الـ CV",
        contactBtn: "تحدث معي",
      },
    },
  };

  const t = content[lang];
  
  // بيانات المستخدم الأساسية
  const userData = {
    name: { en: "Mohamed Ibrahem", ar: "محمد إبراهيم" },
    image: "/imges/WhatsApp Image 2024-07-06 at 17.52.15_f09d851e-Photoroom.png",
    phone: "+201228989799",
    email: "moibrahem522@gmail.com",
  };

  return (
    <main className="bg-transparent min-h-screen"> 
      {/* الهيدر والـ Navbar */}
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      {/* سكاشن الصفحة */}
      <section id="Home">
        <Hero lang={lang} t={t} userData={userData} />
      </section>
      
      <section id="Skills">
        <Skills lang={lang} />
      </section>

      <div className="mt-10">
        <SkillsBar />
      </div>

      <section id="Experience">
        <Experience lang={lang} />
      </section>
      
      <section id="Projects">
        <Projects lang={lang} />
      </section>
      
      <section id="Contact">
        <Contact lang={lang} />
      </section>

      {/* الفوتر */}
      <footer className="relative bg-transparent pt-10 pb-6 overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
              {/* البراند في الفوتر */}
              <div className="md:col-span-2 space-y-3">
                <h2 className="text-2xl font-black text-white tracking-tighter uppercase italic">
                  {lang === 'ar' ? (<>محمد <span className="text-[#06b6d4]">إبراهيم</span></>) : (<>Mohamed <span className="text-[#06b6d4]">Ibrahem</span></>)}
                </h2>
                <p className="text-gray-400 text-xs font-medium">
                  {lang === 'ar' ? "مطور برمجيات متخصص في بناء تطبيقات ويب متطورة وحلول ذكية." : "Software developer specialized in building advanced web apps and smart solutions."}
                </p>
              </div>

              {/* روابط التواصل الاجتماعي */}
              <div className="space-y-4">
                <h4 className="text-[#06b6d4] font-black text-[10px] uppercase tracking-[0.3em] opacity-80">
                  {lang === 'ar' ? 'تابعني' : 'Follow Me'}
                </h4>
                <div className="flex flex-row items-center gap-2.5">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-ibrahem-63446322a' }, 
                    { name: 'GitHub', url: 'https://github.com/MohamedIbrahem522' }
                  ].map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      className="px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-[9px] text-gray-200 font-bold hover:bg-[#06b6d4] hover:text-black transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* معلومات الاتصال */}
              <div className="space-y-4">
                <h4 className="text-[#06b6d4] font-black text-[11px] uppercase tracking-[0.2em]">
                  {lang === 'ar' ? 'تواصل' : 'Contact'}
                </h4>
                <div className="flex flex-col gap-2">
                  <a href="tel:+201228989799" className="text-white text-xs font-bold hover:text-[#06b6d4] transition-all">+201228989799</a>
                  <a href="mailto:moibrahem522@gmail.com" className="text-white text-xs font-bold hover:text-[#06b6d4] transition-all">moibrahem522@gmail.com</a>
                </div>
              </div>
            </div>

            {/* الحقوق وزر الصعود */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="text-gray-500 font-bold uppercase tracking-widest">© 2026</span>
                <p className="font-black text-white uppercase">{lang === 'ar' ? 'محمد إبراهيم' : 'Mohamed Ibrahem'}</p>
              </div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="group flex items-center gap-2 px-5 py-2 border border-[#06b6d4]/30 rounded-full text-[#06b6d4] text-[9px] font-black hover:bg-[#06b6d4] hover:text-black transition-all"
              >
                <span>{lang === 'ar' ? 'للأعلى' : 'Back to top'}</span>
                <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}