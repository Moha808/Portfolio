import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";

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
            // career trajectory
          </span>
          <h2 className="section-heading mt-3">Experience & Education</h2>
          <p className="section-subheading">
            My professional career path, key achievements at tech firms, and academic software engineering training.
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
            {EXPERIENCES.map((item, index) => (
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
                    className="group p-6 sm:p-7 rounded-3xl border border-border bg-card/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
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

                    <div className="flex items-center gap-3 text-muted-foreground mb-4">
                      <span className="font-semibold text-sm text-foreground/90">
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

                    {/* Achievements bullets */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 text-xs font-mono font-medium bg-secondary text-secondary-foreground rounded-md"
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
