import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, GraduationCap, Code2, Database, Shield, Globe, Download, Palette, BookOpen, Wrench, Lightbulb, Rocket, Users, FileCheck } from "lucide-react";
import { useState } from "react";
import { DarkModeToggle } from "./components/DarkModeToggle";

export default function App() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = {
    technical: ["C++", "Java", "Python", "Web Development", "MySQL & PHP", "Cisco Networking", "Cybersecurity", "GitHub"],
    soft: ["Project Management", "Time Management", "Problem Solving", "Teamwork", "Logic Thinking"]
  };

  const projects = [
    {
      title: "Library System",
      description: "Engineered a full-stack library platform integrating book/room management workflows and external API consumption for personalized book recommendations.",
      tags: ["Full-Stack", "API Integration", "Database"],
      icon: Database,
      link: "https://github.com/placeholder"
    },
    {
      title: "Student Learning System",
      description: "Collaborated in a team to develop an e-learning platform using Flutter Web and Laravel, managing the Class System module while ensuring seamless project delivery through Jira and GitHub-based Agile workflows.",
      tags: ["Flutter Web", "Laravel", "Agile"],
      icon: GraduationCap,
      link: "https://kalmnest-one.vercel.app/"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Chinese", level: "Fluent" },
    { name: "Malay", level: "Fluent" },
    { name: "Japanese", level: "N2" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.03),transparent_50%)]" />

        <div className="max-w-6xl w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                className="text-muted-foreground mb-4 tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Computer Science Student
              </motion.p>

              <motion.h1
                className="mb-6 tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, fontWeight: 600 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Sia Jun Yi
              </motion.h1>

              <motion.p
                className="text-muted-foreground mb-8 max-w-xl"
                style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Third-year Computer Science student specializing in Network & Cybersecurity at UTM.
                Passionate about web development, application development, and solving real-world problems through code.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <a
                  href="mailto:siajunyi@graduate.utm.my"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  Open to Internships
                </a>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  whileHover={{ gap: "0.75rem" }}
                >
                  <Download size={20} />
                  Resume
                </motion.a>
              </motion.div>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/sia-jun-yi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className="relative w-full max-w-md mx-auto aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Sia Jun Yi"
                  className="relative rounded-3xl w-full h-full object-cover border border-border shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Skills & Expertise</h2>
            <p className="text-muted-foreground mb-16">Technologies and capabilities I bring to the table.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 flex items-center gap-3">
                <Code2 size={24} className="text-muted-foreground" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-muted rounded-lg text-sm cursor-default transition-all duration-300"
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                    style={{
                      border: hoveredSkill === skill ? "1px solid var(--border)" : "1px solid transparent"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="mb-6 flex items-center gap-3">
                <Shield size={24} className="text-muted-foreground" />
                Professional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-muted rounded-lg text-sm cursor-default transition-all duration-300"
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                    style={{
                      border: hoveredSkill === skill ? "1px solid var(--border)" : "1px solid transparent"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="mb-6 flex items-center gap-3">
              <Globe size={24} className="text-muted-foreground" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-sm">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-24 px-6 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <Rocket size={20} className="text-primary" />
              <span className="text-primary font-medium">Currently Learning</span>
            </div>
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Expanding My Toolkit</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Continuously learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
            </p>

            <motion.div
              className="inline-flex items-center gap-4 px-8 py-6 bg-background border border-border rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 flex items-center justify-center">
                <Code2 size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-left">
                <h3 className="mb-1">Advanced Python</h3>
                <p className="text-muted-foreground text-sm">Data structures, algorithms, and frameworks</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Beyond Code</h2>
            <p className="text-muted-foreground mb-16">Creative pursuits and interests that fuel my passion.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Palette, label: "Drawing", color: "from-pink-500/20 to-purple-500/20" },
              { icon: BookOpen, label: "Reading", color: "from-blue-500/20 to-cyan-500/20" },
              { icon: Code2, label: "Developing", color: "from-green-500/20 to-emerald-500/20" },
              { icon: Wrench, label: "Designing", color: "from-orange-500/20 to-red-500/20" },
              { icon: Lightbulb, label: "Learning", color: "from-yellow-500/20 to-amber-500/20" }
            ].map((hobby, index) => (
              <motion.div
                key={hobby.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${hobby.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <hobby.icon size={28} className="text-foreground" />
                  </div>
                  <h4 className="text-sm">{hobby.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Featured Projects</h2>
            <p className="text-muted-foreground mb-16">Real-world applications I've built and contributed to.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 border border-border rounded-xl hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <project.icon size={32} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    <ExternalLink size={20} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-32 px-6 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Moments & Memories</h2>
            <p className="text-muted-foreground mb-16">Capturing the journey through university life and beyond.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1632835256083-f044d6a859ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1531497151418-0519708d443e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1531497082986-2422f7b87330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1531496681078-27dc2277e898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1663507898277-e4f94adc9333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              "https://images.unsplash.com/photo-1732209556962-df3c1334bc47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Club Involvement</h2>
            <p className="text-muted-foreground mb-16">Contributing to community service and organizational leadership.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group max-w-3xl mx-auto"
          >
            <div className="overflow-hidden rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1772587003187-65b32c91df91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Chongde Volunteers Society"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <Users size={24} />
                    <h3 className="text-white" style={{ fontSize: "1.5rem" }}>Chongde Volunteers Society</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                    <span className="text-primary font-medium">Treasury / Finance</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Managing financial operations and budget planning for volunteer activities and community service initiatives at UTM.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-32 px-6 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 tracking-tight" style={{ fontSize: "2.5rem" }}>Activities</h2>
            <p className="text-muted-foreground mb-16">Engaging in collaborative learning and technical exploration.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1681164315051-add1906a9b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                title: "Tech Workshops",
                description: "Organizing and participating in technical workshops"
              },
              {
                image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                title: "Coding Sessions",
                description: "Collaborative learning and code reviews"
              },
              {
                image: "https://images.unsplash.com/photo-1531497082986-2422f7b87330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                title: "Project Building",
                description: "Building projects and prototypes together"
              }
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300 bg-background">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <h3 className="text-white">{activity.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-16 tracking-tight" style={{ fontSize: "2.5rem" }}>Education & Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-8 flex items-center gap-3">
                <GraduationCap size={24} className="text-muted-foreground" />
                Education
              </h3>

              <div className="space-y-8">
                <div className="border-l-2 border-border pl-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-muted-foreground text-sm mb-2">2023 - Present</p>
                  <h4 className="mb-2">Bachelor of Computer Science</h4>
                  <p className="text-muted-foreground mb-2">Universiti Teknologi Malaysia (UTM)</p>
                  <p className="text-sm">Computer Networks & Security • CGPA: 3.78</p>
                </div>

                <div className="border-l-2 border-border pl-6 relative">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full border-2 border-border bg-background" />
                  <p className="text-muted-foreground text-sm mb-2">2022 - 2023</p>
                  <h4 className="mb-2">Matriculation</h4>
                  <p className="text-muted-foreground mb-2">Johor Matriculation College</p>
                  <p className="text-sm">Computer Science • CGPA: 4.00</p>
                </div>

                <div className="border-l-2 border-border pl-6 relative">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full border-2 border-border bg-background" />
                  <p className="text-muted-foreground text-sm mb-2">2017 - 2021</p>
                  <h4 className="mb-2">SPM</h4>
                  <p className="text-muted-foreground mb-2">SMK Seri Kota Puteri 2</p>
                  <p className="text-sm">SPM Results: 9A1B</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="mb-8 flex items-center gap-3">
                <Globe size={24} className="text-muted-foreground" />
                Language Proficiency
              </h3>
              <div className="p-6 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-2">MUET (Malaysian University English Test)</h4>
                    <p className="text-muted-foreground text-sm">2022</p>
                  </div>
                  <div className="text-right">
                    <div className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <span className="text-primary font-medium text-lg">Band 4.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="mb-8 flex items-center gap-3">
                <Award size={24} className="text-muted-foreground" />
                Certifications
              </h3>

              <div className="space-y-4">
                {[
                  {
                    date: "2026",
                    title: "CCNA: Enterprise Networking, Security, and Automation",
                    issuer: "Cisco",
                    certificate: "/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_siajunyi-graduate-utm-my_8087fe31-abdb-4356-92d3-c75ffc7ddde4.pdf"
                  },
                  {
                    date: "2026",
                    title: "Programming with JavaScript",
                    issuer: "Meta",
                    certificate: "/Coursera_SPEKV2T2IY5Z.pdf"
                  },
                  {
                    date: "2026",
                    title: "Programming in Python",
                    issuer: "Meta",
                    certificate: "/Coursera_0KYMMIVF90EC.pdf"
                  },
                  {
                    date: "2025",
                    title: "CCNA: Switching, Routing, and Wireless Essentials",
                    issuer: "Cisco",
                    certificate: "/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_siajunyi-graduate-utm-my_5e906465-cb32-4035-87b0-351745387573.pdf"
                  },
                  {
                    date: "2025",
                    title: "CCNA: Introduction to Networks",
                    issuer: "Cisco",
                    certificate: "/_certificate_siajunyi-graduate-utm-my_ea73e03a-05b0-4b95-8ef3-67b2b258ae2d_(1).pdf"
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    <div className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-muted-foreground text-sm mb-2">{cert.date} • {cert.issuer}</p>
                          <h4 className="mb-3 group-hover:text-primary transition-colors">{cert.title}</h4>
                        </div>
                        <motion.a
                          href={cert.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm bg-muted hover:bg-accent rounded-lg transition-colors whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FileCheck size={16} />
                          View Certificate
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 tracking-tight" style={{ fontSize: "2.5rem" }}>Let's Connect</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm actively seeking internship opportunities in web and application development.
              Feel free to reach out if you'd like to discuss potential opportunities or collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.a
                href="mailto:siajunyi@graduate.utm.my"
                className="flex items-center gap-3 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={20} />
                <span>siajunyi@graduate.utm.my</span>
              </motion.a>

              <motion.a
                href="tel:+60167560503"
                className="flex items-center gap-3 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={20} />
                <span>+60-167560503</span>
              </motion.a>
            </div>

            <div className="flex gap-6 justify-center">
              <motion.a
                href="https://www.linkedin.com/in/sia-jun-yi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Github size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Sia Jun Yi. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} />
              <span>Johor Bahru, Malaysia</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}