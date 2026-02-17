"use client";
import React, { useEffect, useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Linkedin, Github } from "lucide-react";

const Contact = ({ lang }: { lang: "ar" | "en" }) => {
  const isAr = lang === "ar";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "", msg: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const myNumber = "201228989799"; 
    
    const text = 
      `الاسم: ${formData.name}%0A` +
      `الهاتف: ${formData.phone}%0A` +
      `الرسالة: ${formData.msg}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  const t = {
    en: {
      tag: "READY TO START?",
      title: "Contact",
      highlight: "Me",
      info: [
        { icon: <Mail size={18} />, label: "Email", value: "moibrahem522@gmail.com", link: "mailto:moibrahem522@gmail.com" },
        { icon: <Phone size={18} />, label: "Phone", value: "+201228989799", link: "tel:+201228989799" },
        { icon: <MapPin size={18} />, label: "Location", value: "Egypt, Zagazig", link: "#" },
      ],
      form: { name: "Full Name", phone: "Phone Number", msg: "Message", btn: "Send to WhatsApp" }
    },
    ar: {
      tag: "هل أنت مستعد؟",
      title: "تواصل",
      highlight: "معي",
      info: [
        { icon: <Mail size={18} />, label: "الإيميل", value: "moibrahem522@gmail.com", link: "mailto:moibrahem522@gmail.com" },
        { icon: <Phone size={18} />, label: "الموبايل", value: "01228989799", link: "tel:+201228989799" },
        { icon: <MapPin size={18} />, label: "الموقع", value: "مصر، الزقازيق", link: "#" },
      ],
      form: { name: "الاسم بالكامل", phone: "رقم الهاتف", msg: "الرسالة", btn: "إرسال للواتساب" }
    }
  }[lang];

  return (
    /* تم استبدال bg-[#050505] بـ bg-transparent */
    <section ref={sectionRef} id="Contact" className={`relative w-full bg-transparent py-16 px-4 overflow-hidden ${isAr ? 'font-cairo' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* تم حذف توهج الخلفية (div الـ Glow) من هنا */}

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* العنوان */}
        <div className="text-center mb-12 transition-all duration-1000">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5">
             <Sparkles size={12} className="text-[#06b6d4] animate-bounce" />
             <span className="text-[#06b6d4] text-[9px] font-black tracking-[0.2em] uppercase">{t.tag}</span>
          </div>
          <h2 className={`text-3xl md:text-5xl text-white font-black transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {t.title} <span className="text-[#06b6d4] drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">{t.highlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* كروت التواصل */}
          <div className="space-y-4">
            {t.info.map((item, idx) => (
              <a 
                href={item.link} 
                key={idx}
                className={`group flex items-center gap-4 p-5 bg-[#0a0a0b]/80 backdrop-blur-md border border-white/5 rounded-2xl transition-all duration-500 hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] active:scale-95 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] border border-[#06b6d4]/20 group-hover:bg-[#06b6d4] group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <div className="text-start">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{item.label}</p>
                  <p className="text-white font-bold text-xs md:text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex gap-4 pt-6 justify-center md:justify-start">
              {[
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/mohamed-ibrahem-63446322a" },
                { icon: <Github size={20} />, link: "https://github.com/MohamedIbrahem522" },
                { icon: <MessageSquare size={20} />, link: "https://wa.me/201228989799" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0b] transition-all duration-300 hover:border-[#06b6d4]/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95"
                >
                  <div className="text-gray-500 transition-all duration-300 group-hover:text-[#06b6d4] group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* الفورم */}
          <div className={`relative p-[1px] rounded-3xl overflow-hidden group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#050505_25%,#06b6d4_50%,#050505_75%,#06b6d4_100%)] opacity-20 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative bg-[#0a0a0b]/90 backdrop-blur-md p-6 rounded-3xl border border-white/5">
              <form onSubmit={handleWhatsAppSend} className="space-y-4 text-start">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">{t.form.name}</label>
                  <input 
                    type="text" required 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#06b6d4] focus:outline-none focus:bg-[#06b6d4]/5 transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">{t.form.phone}</label>
                  <input 
                    type="tel" required 
                    style={{ direction: 'ltr' }}
                    className={`w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#06b6d4] focus:outline-none focus:bg-[#06b6d4]/5 transition-all ${isAr ? 'text-right focus:text-left' : ''}`}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">{t.form.msg}</label>
                  <textarea 
                    rows={3} required 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#06b6d4] focus:outline-none focus:bg-[#06b6d4]/5 transition-all resize-none"
                    onChange={(e) => setFormData({...formData, msg: e.target.value})}
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-[#06b6d4] text-[#050505] font-black rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]">
                  {t.form.btn} <MessageSquare size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;