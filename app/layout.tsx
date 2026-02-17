import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

// إعداد خط كايرو
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cairo",
});

// بيانات الموقع (SEO)
export const metadata: Metadata = {
  title: "Mohamed Ibrahem | Portfolio",
  description: "Full Stack Developer & AI & Computer Vision Explorer",
  icons: {
    icon: "/icon.png?v=1",
    shortcut: "/icon.png?v=1",
    apple: "/icon.png?v=1",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      dir="ltr" 
      className={cairo.variable} 
      suppressHydrationWarning
    >
      <body
        className={`${cairo.className} font-cairo antialiased bg-[#020202] text-white min-h-screen relative`}
        suppressHydrationWarning
      >
        <main className="relative z-10 w-full">
          {children}
        </main>

        {/* سكريبت خلفية النقط */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            function initParticles() {
              const oldCanvas = document.getElementById('glowParticles');
              if (oldCanvas) return;

              const canvas = document.createElement('canvas');
              canvas.id = 'glowParticles';
              canvas.className = 'fixed inset-0 -z-10 bg-[#020202]';
              canvas.style.pointerEvents = 'none';
              document.body.appendChild(canvas);

              const ctx = canvas.getContext('2d');
              let particles = [];
              
              function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
              }
              window.addEventListener('resize', resize);
              resize();

              class Particle {
                constructor() {
                  this.x = Math.random() * canvas.width;
                  this.y = Math.random() * canvas.height;
                  this.size = Math.random() * 2 + 1.5;
                  this.vx = (Math.random() - 0.5) * 0.60; 
                  this.vy = (Math.random() - 0.5) * 0.60;
                  this.opacity = Math.random() * 0.5 + 0.2;
                }
                update() {
                  this.x += this.vx;
                  this.y += this.vy;
                  if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                  if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                }
                draw() {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                  ctx.shadowBlur = 12;
                  ctx.shadowColor = "rgba(6, 182, 212, 0.6)"; 
                  ctx.fillStyle = "rgba(6, 182, 212, " + this.opacity + ")";
                  ctx.fill();
                  ctx.shadowBlur = 0;
                }
              }

              for (let i = 0; i < 110; i++) particles.push(new Particle());

              function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => {
                  p.update();
                  p.draw();
                });
                requestAnimationFrame(animate);
              }
              animate();
            }

            // تشغيل السكريبت بعد ما الصفحة تحمل بالكامل
            if (document.readyState === 'complete') {
              initParticles();
            } else {
              window.addEventListener('load', initParticles);
            }
          })();
        `,
          }}
        />
      </body>
    </html>
  );
}