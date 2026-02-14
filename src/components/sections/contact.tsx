import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "igalmoha0@gmail.com",
    href: "mailto:igalmoha0@gmail.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Nigeria",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/Moha808",
    label: "GitHub",
    username: "@Moha808",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/igal-mohadapwa",
    label: "LinkedIn",
    username: "igal-mohadapwa",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/M_o_h_a_808",
    label: "Twitter",
    username: "@M_o_h_a_808",
  },
];

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            // contact
          </span>
          <h2 className="section-heading mt-3">Let's Work Together</h2>
          <p className="section-subheading">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Get in touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to connect — my inbox is always open. I'll get back to you
                as soon as possible!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Find me on
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card/50 glow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none text-sm placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none text-sm placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none text-sm placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 outline-none resize-none text-sm placeholder:text-muted-foreground/50"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending || isSent}
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-80 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSent ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
