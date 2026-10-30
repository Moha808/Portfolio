import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  Calendar,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useToast } from "@/providers/toast-provider";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "", // Honeypot spam trap
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { success } = useToast();

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const isServiceConfigured = Boolean(
    (web3FormsKey && web3FormsKey !== "your_web3forms_access_key_here") || formspreeId
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check: if filled, silently discard
    if (formData.botcheck) {
      setStatus("success");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // If an email service access key is configured in .env, send via API
    if (isServiceConfigured) {
      try {
        let response: Response;

        if (web3FormsKey) {
          response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: web3FormsKey,
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: formData.subject.trim(),
              message: formData.message.trim(),
              from_name: "Portfolio Contact Form",
            }),
          });
        } else {
          // Formspree endpoint
          response = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: formData.subject.trim(),
              message: formData.message.trim(),
            }),
          });
        }

        const data = await response.json();

        if (response.ok && (data.success || data.ok)) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
          setErrors({});
        } else {
          throw new Error(data.message || "Email delivery service returned an error.");
        }
      } catch (err: unknown) {
        setStatus("error");
        const msg = err instanceof Error ? err.message : "Network error. Please try again or email directly.";
        setErrorMessage(msg);
      }
    } else {
      // Graceful, transparent handling when .env key has not been supplied yet
      // Open user's default email client pre-filled with their validated message
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject.trim(),
      )}&body=${encodeURIComponent(
        `Hi Moha,\n\n${formData.message.trim()}\n\nFrom: ${formData.name.trim()} (${formData.email.trim()})`,
      )}`;

      window.location.href = mailtoLink;
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary font-mono text-xs tracking-wider uppercase">
            // get in touch
          </span>
          <h2 className="section-heading mt-2">Contact & Collaboration</h2>
          <p className="section-subheading">
            Have a project in mind, want to discuss frontend engineering, or hiring for a role? Send a message below or contact me directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info & Verified Channels */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Let's Connect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am open to full-time frontend developer roles, contracts, and collaboration on Firebase-powered web applications.
              </p>
            </div>

            {/* 1-Click Copy Email Card */}
            <div className="p-4 rounded-xl border border-border bg-card flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Direct Email</p>
                  <p className="text-sm font-semibold text-foreground truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground text-xs font-medium transition-colors shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location & Status */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin size={16} />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-emerald-500 shrink-0">
                  <Calendar size={16} />
                </div>
                <span>{PERSONAL_INFO.status}</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Social Profiles
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-xs font-semibold text-foreground"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-xs font-semibold text-foreground"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl border border-border bg-card hover:bg-secondary hover:text-primary transition-all text-xs font-semibold text-foreground"
                >
                  <Twitter size={15} /> Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-sm">
              {/* Submission Success Banner */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message dispatched successfully!</p>
                    <p className="text-xs mt-0.5 text-muted-foreground">
                      Thank you for reaching out. I have received your message and will reply to your email shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Submission Error Banner */}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-start gap-3 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Submission failed</p>
                    <p className="text-xs mt-0.5">{errorMessage}</p>
                    <p className="text-xs mt-2">
                      You can also reach me directly at{" "}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold">
                        {PERSONAL_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot hidden input for bot protection */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      disabled={status === "submitting"}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/60 text-sm outline-none transition-all placeholder:text-muted-foreground/60 ${
                        errors.name
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      disabled={status === "submitting"}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="jane@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/60 text-sm outline-none transition-all placeholder:text-muted-foreground/60 ${
                        errors.email
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    disabled={status === "submitting"}
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="Project Inquiry / Role Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/60 text-sm outline-none transition-all placeholder:text-muted-foreground/60 ${
                      errors.subject
                        ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    disabled={status === "submitting"}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Provide details about your project, timeline, or engineering position..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/60 text-sm outline-none resize-none transition-all placeholder:text-muted-foreground/60 ${
                      errors.message
                        ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:opacity-95 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
