import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Globe, Laptop, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const features = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Clean Architecture",
    description:
      "Modular TypeScript and React component architecture built for maintainability and team scalability.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Responsive Design",
    description:
      "Pixel-accurate layouts that work seamlessly across mobile, tablet, and desktop viewports.",
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Modern Stack",
    description:
      "React 19, Tailwind CSS, Vite, Firebase — using production-grade tools for real-world applications.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance Focus",
    description:
      "Code splitting, lazy loading, asset optimization, and performance auditing for fast experiences.",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const steps = 50;
    const stepValue = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-mono text-xs tracking-wider uppercase">
            // about me
          </span>
          <h2 className="section-heading mt-2">Background & Approach</h2>
          <p className="section-subheading">
            How I approach frontend engineering, what drives my work, and the philosophy behind every project I build.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
              Frontend Engineer &<br />
              Firebase Integrator based in{" "}
              <span className="text-primary">Nigeria</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I build web applications that solve real problems — from e-commerce platforms and social communities to pharmacy management systems and institutional document portals. My work bridges visual design with solid engineering: clean component architecture, accessible interfaces, and performant Firebase-powered backends.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Over 2 years of production experience at African Intelligence PLC and Nhub Organisation have given me a grounded, practical approach to frontend development. I focus on shipping working software that serves users, not on decorative complexity.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:opacity-95 transition-all"
            >
              Let's Work Together
            </a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary/15 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1.5 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 rounded-xl border border-border bg-card shadow-sm"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
