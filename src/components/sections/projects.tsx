import { useState } from "react";
import {
  ExternalLink,
  Info,
  Globe,
} from "lucide-react";
import { PROJECTS, type Project } from "@/data/portfolio-data";
import { ProjectModal } from "./project-modal";

function ProjectVisual({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-52 sm:h-60 w-full overflow-hidden border-b border-border bg-slate-950 flex flex-col group/thumb">
      {/* Real Website Screenshot */}
      <div className="flex-grow relative overflow-hidden bg-slate-900 flex items-center justify-center">
        {!imgError ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
            />
            {/* Subtle bottom vignette gradient so the image blends into the card cleanly */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          /* Fallback clean placeholder if image load ever fails */
          <div className="p-6 text-center text-slate-400 font-mono text-xs flex flex-col items-center justify-center gap-2">
            <Globe size={24} className="text-teal-400" />
            <span>{project.domain}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects (8)" },
    { id: "ecommerce", label: "E-Commerce (2)" },
    { id: "social", label: "Social & Community (3)" },
    { id: "webapps", label: "Web Apps & Systems (3)" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-xs tracking-wider uppercase">
            // portfolio & live work
          </span>
          <h2 className="section-heading mt-2">Featured Projects</h2>
          <p className="section-subheading">
            Eight live production web applications, community platforms, and enterprise tools I have engineered. Each project includes real interface screenshots and a working live site you can test directly.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Real Website Screenshot Thumbnail in Browser Window */}
                <ProjectVisual project={project} />

                {/* Card Header & Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[200px]">
                      {project.domain}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-secondary text-secondary-foreground border border-border/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-secondary/30 border-t border-border flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:opacity-95 transition-all"
                >
                  <span>View Live Project</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card hover:bg-secondary text-foreground text-xs font-medium transition-colors"
                >
                  <Info size={13} className="text-primary" />
                  <span>Case Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
