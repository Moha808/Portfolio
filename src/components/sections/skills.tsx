import { useState } from "react";
import {
  Code2,
  FileCode,
  Sparkles,
  Palette,
  Globe,
  Layout,
  Zap,
  Layers,
  Server,
  Flame,
  Network,
  Database,
  GitBranch,
  Rocket,
  Figma,
  Terminal,
  Cloud,
  Gauge,
  CheckCircle,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-primary" />,
  FileCode: <FileCode className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Palette: <Palette className="w-5 h-5 text-teal-500" />,
  Globe: <Globe className="w-5 h-5 text-emerald-500" />,
  Layout: <Layout className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Layers: <Layers className="w-5 h-5 text-teal-500" />,
  Server: <Server className="w-5 h-5 text-emerald-600" />,
  Flame: <Flame className="w-5 h-5 text-orange-500" />,
  Network: <Network className="w-5 h-5 text-teal-400" />,
  Database: <Database className="w-5 h-5 text-teal-500" />,
  GitBranch: <GitBranch className="w-5 h-5 text-emerald-500" />,
  Rocket: <Rocket className="w-5 h-5 text-teal-500" />,
  Figma: <Figma className="w-5 h-5 text-amber-500" />,
  Terminal: <Terminal className="w-5 h-5 text-slate-400" />,
  Cloud: <Cloud className="w-5 h-5 text-teal-500" />,
  Gauge: <Gauge className="w-5 h-5 text-emerald-500" />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    ...SKILL_CATEGORIES.map((c) => ({ id: c.category, label: c.category })),
  ];

  const filteredCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-xs tracking-wider uppercase">
            // technical expertise
          </span>
          <h2 className="section-heading mt-2">Skills & Technical Proficiencies</h2>
          <p className="section-subheading">
            Technologies, libraries, and tools I use to build scalable frontend interfaces and integrate backend services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground">
                  {cat.category}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-3.5 rounded-xl border border-border bg-background/50 hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                        {iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-primary" />}
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                          skill.level === "Core"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-secondary text-muted-foreground border-border"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span>Production Ready</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
