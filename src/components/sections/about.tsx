import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Globe, Laptop, Zap } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code following industry best practices and modern patterns.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Responsive Design",
    description:
      "Pixel-perfect, adaptive layouts that look stunning on every device and screen size.",
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Modern Tech",
    description:
      "Leveraging cutting-edge tools and frameworks to build blazing-fast web experiences.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance",
    description:
      "Optimized for speed with lazy loading, code splitting, and efficient rendering.",
  },
];

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Commitment" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
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
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            // about me
          </span>
          <h2 className="section-heading mt-3">Get To Know Me</h2>
          <p className="section-subheading">
            A glimpse into who I am, what I do, and what drives me to build
            amazing things.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate Web Developer
              <br />
              based in <span className="gradient-text">Nigeria</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a dedicated frontend developer with a passion for creating
              beautiful and functional web applications. With a strong
              foundation in HTML, CSS, and JavaScript, I ensure that every
              project isn't just a website — it's a{" "}
              <span className="text-foreground font-medium">
                digital experience
              </span>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or sharing my knowledge with the
              developer community. I believe in continuous learning and pushing
              the boundaries of what's possible on the web.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Let's Work Together
            </motion.a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-5 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 glow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="text-center p-6 rounded-2xl border border-border bg-card/30 hover:border-primary/20 transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
