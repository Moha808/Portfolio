import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive analytics dashboard for managing products, orders, tracking sales metrics, and visualizing business performance in real-time.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    links: { demo: "#", repo: "#" },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Social Media App",
    description:
      "A fully functional social media application with real-time messaging, user profiles, news feed, and content sharing capabilities.",
    tags: ["Firebase", "TypeScript"],
    links: { demo: "#", repo: "#" },
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Task Management Tool",
    description:
      "Kanban-style project management app for teams to collaborate, assign tasks, set deadlines, and track progress efficiently.",
    tags: ["React", "Redux", "Node.js"],
    links: { demo: "#", repo: "#" },
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
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
            // my work
          </span>
          <h2 className="section-heading mt-3">Featured Projects</h2>
          <p className="section-subheading">
            A curated selection of projects that showcase my skills and passion
            for building exceptional web experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative grid lg:grid-cols-2 gap-0 rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <Folder size={16} />
                    <span className="text-xs font-mono uppercase tracking-wider">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.links.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </motion.a>
                    <motion.a
                      href={project.links.repo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-primary/30 font-medium text-sm transition-all"
                    >
                      Source Code
                      <Github size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.a
                        href={project.links.demo}
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.links.repo}
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-card/90 border border-border text-foreground flex items-center justify-center shadow-lg"
                        title="Source Code"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>

                    {/* Project Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/80 border border-border flex items-center justify-center text-xs font-mono font-bold text-muted-foreground">
                      0{index + 2}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono font-medium bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
