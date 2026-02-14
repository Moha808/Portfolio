import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-violet-500/20 to-purple-500/20",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    color: "from-blue-500/20 to-cyan-500/20",
    items: [
      { name: "Firebase", level: 80 },
      { name: "SQL", level: 55 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-emerald-500/20 to-teal-500/20",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Vite", level: 85 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" as const }}
          className="h-full bg-gradient-to-r from-primary to-[hsl(280_80%_65%)] rounded-full"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            // my skills
          </span>
          <h2 className="section-heading mt-3">Skills & Technologies</h2>
          <p className="section-subheading">
            The tools and technologies I use to bring ideas to life and create
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Subtle gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      delay={catIndex * 0.15 + itemIndex * 0.08}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
