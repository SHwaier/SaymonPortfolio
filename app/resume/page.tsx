"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAnalytics } from "@/components/analytics-provider";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Globe,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ResumePage() {
  const { trackEvent } = useAnalytics();

  const handleDownload = () => {
    trackEvent("resume_download", "PDF format");
  };

  const skills = {
    languages: ["C#", "C", "Java", "PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    frameworks: ["React", "Tailwind CSS", "Next.js", "WordPress"],
    technologies: [
      "Git",
      "GitHub",
      "Linux",
      "Figma",
      "Cloudflare",
      "Gradle",
      "REST APIs",
      "JWT Tokens",
      "JUnit Testing",
      "MongoDB",
      "N8N",
    ],
  };

  const experience = [
    {
      role: "Sales Representative",
      company: "TELUS Communications",
      location: "Windsor, ON",
      period: "Oct 2023 - Present",
      highlights: [
        "Developed a growing book-of-business by fostering loyalty, turning in-store downtime into 35 over-the-phone sales in 2025.",
        "Maintained a high level of professionalism and product knowledge to build trust and rapport with clients.",
        "Exceeded Ontario TELUS Pure Fiber expansion sales targets at 126.9%, bringing more high-speed home internet options to customers.",
      ],
      tags: ["Communication", "Client Relations", "Sales Strategy"],
    },
    {
      role: "WordPress Developer",
      company: "Integrative Canadian Group Organization",
      location: "Windsor, ON",
      period: "Jun 2022 - Aug 2023",
      highlights: [
        "Developed and maintained 2 responsive organization websites using WordPress, PHP, HTML, CSS, and JS, resulting in a 56% boost in website traffic.",
        "Collaborated with the board of directors to ensure website requirements aligned with their vision and future operational needs.",
        "Optimized website images, scripts, and responsive styling to achieve an 85% device performance improvement.",
      ],
      tags: ["WordPress", "PHP", "HTML5/CSS3", "JavaScript", "Performance Optimization"],
    },
    {
      role: "Supervisor",
      company: "Tim Hortons",
      location: "Windsor, ON",
      period: "Sep 2021 - Aug 2023",
      highlights: [
        "Managed and scheduled a team of 8 employees daily, implementing workflows to reduce drive-thru service times by 57%.",
        "Handled customer issues with professionalism to ensure satisfaction, fostering repeat visits and brand loyalty.",
      ],
      tags: ["Team Leadership", "Operations", "Problem Solving"],
    },
  ];

  const projects = [
    {
      title: "Work Scheduler",
      period: "Jan 2026",
      tech: ["Python", "N8N", "Google Calendar API", "Google Gmail API", "Cloudflare Tunnel"],
      description:
        "An automation service that parses work schedules from sheets and translates them automatically into Google Calendar events, reducing manual tracking.",
      highlights: [
        "Designed self-hosted automation workflows with N8N to check schedules and trigger immediate calendar additions.",
        "Abstracted logic for easy API adjustments and utilized secure Cloudflare Tunnels for endpoint routing.",
      ],
    },
    {
      title: "Personal Portfolio",
      period: "Sep 2023",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      description:
        "A premium personal portfolio with a bento grid structure, visual timeline, dark/light theme switching, and integrated analytics.",
      highlights: [
        "Built responsive interfaces with Tailwind CSS and Framer Motion for micro-animations.",
        "Implemented dynamic configuration allowing content updates via structured JSON systems.",
      ],
    },
    {
      title: "Fancy Pants, 2D Game Engine",
      period: "Mar 2024",
      tech: ["Java", "Java Swing", "Java AWT", "Gradle"],
      description:
        "A 2D game engine built from the ground up as a team of 5, featuring physics simulation, scene rendering, and frame loop management.",
      highlights: [
        "Created the custom physics engine, collision detection algorithms, and progress tracker UI.",
        "Configured multi-developer project dependencies and builds using Gradle.",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Science Honours Computer Science with Software Engineering",
    school: "University of Windsor",
    location: "Windsor, ON",
    period: "Sep 2022 - Present",
    details: [
      "Certificate: Applied Information Technology",
      "Recipient of the Dean's Entrance Scholarship ($10,000)",
    ],
    courses: [
      "Object Oriented Programming (Java)",
      "Advanced Website Design",
      "Data Structures & Algorithms",
      "Software Development",
      "System Programming",
      "Operating System Fundamentals",
    ],
  };

  const extracurriculars = [
    {
      role: "Event Coordinator",
      org: "Computer Science Society (CSS)",
      location: "Windsor, ON",
      period: "May 2024 - May 2025",
      highlights: [
        "Organized and executed workshops, coding contests, and guest lectures attracting 40-75 students per event.",
        "Collaborated with university faculty and external tech recruiters to secure sponsors and speakers.",
      ],
    },
    {
      role: "CUSEC representative",
      org: "Canadian Universities Software Engineering Conference",
      location: "Montreal, QC",
      period: "Jan 2024",
      highlights: [
        "Selected as one of 16 students representing the University of Windsor at this national event.",
        "Attended workshops on design patterns, cloud computing, and built networks with software teams.",
      ],
    },
    {
      role: "Frontend Developer (Blaze Guard)",
      org: "NASA Space Apps Hackathon",
      location: "Windsor Regional",
      period: "Oct 2023",
      highlights: [
        "Won 1st Place Regionally in a team of 5 by developing an application to track, report, and map wildfire threats.",
        "Engineered the responsive dashboard layout, visual fire threat charts, and interactive map interface.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-between">
      <Header />

      {/* Decorative background gradients */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <main className="container mx-auto px-4 pt-28 pb-16 relative z-10 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Top Banner / Actions */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b"
          >
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-2">
                Saymon Hwaier
              </h1>
              <p className="text-xl text-muted-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" /> Software Engineer
              </p>
            </div>
            <Button
              className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6 py-5 rounded-full flex items-center gap-2 shadow-lg shadow-foreground/5 cursor-pointer"
              asChild
              onClick={handleDownload}
            >
              <a href="/assets/resume.pdf" download="Saymon_Hwaier_Resume.pdf">
                <Download className="w-4 h-4" /> Download PDF Resume
              </a>
            </Button>
          </motion.div>

          {/* Quick Contact Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 bg-card/40 backdrop-blur-xs p-4 rounded-2xl border"
          >
            {[
              { icon: Phone, text: "(226) 345-6700", href: "tel:2263456700" },
              { icon: Mail, text: "saymon.hwaier@gmail.com", href: "mailto:saymon.hwaier@gmail.com" },
              { icon: Linkedin, text: "LinkedIn Profile", href: "https://linkedin.com/in/saymon-hwaier" },
              { icon: Github, text: "GitHub", href: "https://github.com/SHwaier" },
              { icon: Globe, text: "saymon.ca", href: "https://saymon.ca" },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                onClick={() => trackEvent("resume_click_contact", contact.text)}
              >
                <contact.icon className="w-4 h-4 shrink-0 text-accent/80" />
                <span className="truncate">{contact.text}</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left Side: Skills, Education, Achievements */}
            <div className="lg:col-span-1 space-y-8">
              {/* Technical Skills Card */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 border-border/50 bg-card/40 backdrop-blur-xs relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                  <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-accent" /> Technical Skills
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> Languages
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.languages.map((lang, i) => (
                          <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> Frameworks
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.frameworks.map((fw, i) => (
                          <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
                            {fw}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" /> Technologies & Tools
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Education Card */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 border-border/50 bg-card/40 backdrop-blur-xs">
                  <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-accent" /> Education
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-foreground leading-snug">
                        {education.degree}
                      </h3>
                      <p className="text-sm text-accent font-medium mt-1">{education.school}</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {education.period}
                      </p>
                    </div>

                    <Separator />

                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {education.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/80 mt-4 mb-2">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {education.courses.map((course, i) => (
                          <Badge key={i} variant="outline" className="text-xs font-normal border-border/60">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Side: Professional Journey & Projects */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience Card */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 border-border/50 bg-card/40 backdrop-blur-xs">
                  <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent" /> Work Experience
                  </h2>

                  <div className="space-y-8">
                    {experience.map((job, index) => (
                      <div key={index} className="relative pl-6 border-l border-border/60 last:pb-0">
                        {/* Dot indicator */}
                        <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 bg-accent rounded-full" />

                        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                          <div>
                            <h3 className="font-bold text-lg text-foreground">{job.role}</h3>
                            <p className="text-sm text-accent font-medium">{job.company}</p>
                          </div>
                          <div className="text-right text-xs text-muted-foreground space-y-1">
                            <p className="font-medium flex items-center justify-end gap-1">
                              <Calendar className="w-3 h-3" /> {job.period}
                            </p>
                            <p className="flex items-center justify-end gap-1">
                              <MapPin className="w-3 h-3" /> {job.location}
                            </p>
                          </div>
                        </div>

                        <ul className="list-disc pl-4 space-y-1.5 text-sm text-muted-foreground mb-4">
                          {job.highlights.map((highlight, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs py-0 px-2 font-normal border-accent/20 text-accent bg-accent/5">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {index < experience.length - 1 && <Separator className="mt-8" />}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Projects Card */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 border-border/50 bg-card/40 backdrop-blur-xs">
                  <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-accent" /> Key Projects
                  </h2>

                  <div className="space-y-6">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="group relative p-4 rounded-xl border border-border/40 hover:border-accent/40 bg-background/50 hover:bg-accent/5 transition-all duration-300">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h3 className="font-bold text-base text-foreground group-hover:text-accent transition-colors">
                            {proj.title}
                          </h3>
                          <Badge variant="outline" className="font-mono text-xs font-normal">
                            {proj.period}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{proj.description}</p>
                        <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground/80 mb-3">
                          {proj.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1">
                          {proj.tech.map((t, i) => (
                            <Badge key={i} variant="secondary" className="text-[10px] py-0 px-1.5 font-normal bg-accent/10 text-accent border border-accent/20">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Extracurriculars Card */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 border-border/50 bg-card/40 backdrop-blur-xs">
                  <h2 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" /> Extracurriculars & Leadership
                  </h2>

                  <div className="space-y-6">
                    {extracurriculars.map((extra, idx) => (
                      <div key={idx} className="relative pl-6 border-l border-border/60">
                        <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-1.5">
                          <div>
                            <h3 className="font-bold text-sm text-foreground">{extra.role}</h3>
                            <p className="text-xs text-accent font-medium">{extra.org}</p>
                          </div>
                          <div className="text-right text-xs text-muted-foreground">
                            <p className="font-medium">{extra.period}</p>
                            <p>{extra.location}</p>
                          </div>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                          {extra.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
