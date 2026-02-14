import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experience = [
  {
    type: "work" as const,
    role: "Junior Frontend Developer",
    company: "African Intelligence PLC",
    location: "Nigeria",
    period: "2025 - Present",
    description:
      "Collaborating with design and product teams to implement pixel-perfect user interfaces. Mentoring junior developers and contributing to design system architecture.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    type: "work" as const,
    role: "Frontend Developer",
    company: "Nhub Organisation",
    location: "Nigeria",
    period: "2024 - 2025",
    description:
      "Built interactive web applications and collaborated closely with designers to translate Figma mockups into responsive, accessible user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "education" as const,
    role: "HND Computer Science",
    company: "Federal College of Animal Health & Production Technology, Vom",
    location: "Plateau State, Nigeria",
    period: "2022 - 2026",
    description:
      "Focused on software engineering and web technologies. Graduated with honors while actively building projects and contributing to open source.",
    skills: ["Software Engineering", "Web Development", "Data Structures"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            // journey
          </span>
          <h2 className="section-heading mt-3">Experience & Education</h2>
          <p className="section-subheading">
            My professional journey and academic background that shaped me as a
            developer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" as const }}
              className="w-full bg-gradient-to-b from-primary via-primary/50 to-border"
            />
          </div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20"
                  >
                    {item.type === "work" ? (
                      <Briefcase size={18} className="text-primary" />
                    ) : (
                      <GraduationCap size={18} className="text-primary" />
                    )}
                  </motion.div>
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-0"
                      : "md:ml-auto md:pl-0"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>

                    <div className="flex items-center gap-3 text-muted-foreground mb-3">
                      <span className="font-medium text-sm">
                        {item.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-mono font-medium bg-secondary text-secondary-foreground rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
