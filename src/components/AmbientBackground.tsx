import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let anim = 0;

    interface Particle {
      x: number;
      y: number;
      r: number;
      speedY: number;
      speedX: number;
      opacity: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        speedY: -(Math.random() * 0.25 + 0.05),
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.25 + 0.05,
        life: Math.random() * 500,
        maxLife: Math.random() * 600 + 400,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        if (p.life > p.maxLife || p.y < -10) {
          p.x = Math.random() * w;
          p.y = h + 10;
          p.life = 0;
          p.maxLife = Math.random() * 600 + 400;
        }

        const fade = Math.min(p.life / 80, 1) * Math.min((p.maxLife - p.life) / 80, 1);
        const alpha = p.opacity * fade;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 26, 26, ${alpha})`;
        ctx.fill();
      });

      anim = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(anim);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,26,26,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-nitron-red/[0.025] rounded-full blur-[150px]" />
      <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-nitron-red/[0.015] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-nitron-red/[0.02] rounded-full blur-[120px]" />
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" style={{ opacity: 0.6 }} />
    </div>
  );
}
