import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GradientLoader from "@/components/GradientLoader";
import HeroContent from "@/components/HeroContent";
import GsapEffectsInit from "@/components/GsapEffectsInit";

export const metadata: Metadata = {
  title: "Dev Patel - Personal Site",
  description: "Software engineer focused on data, analytics, and environmental intelligence.",
};

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const heroHighlights = [
  "Software engineer shaping human-centered analytics experiences.",
  "Former UND researcher translating environmental data into actionable insight.",
  "Available for press briefings, panels, and data storytelling collaborations.",
];

const experiences = [
  {
    company: "Aethero",
    role: "Software Engineer I - Data & Analytics Focus",
    timeframe: "Aug 2024 - Present",
    location: "Fargo, ND",
    achievements: [
      "Architected interactive analytics dashboards with React and D3.js, helping stakeholders respond to live metrics and trimming reporting cycles by 40%.",
      "Automated AWS + SQL data integration pipelines that unify lab and IoT feeds, improving reporting latency by 30% and eliminating roughly $80K in manual effort.",
      "Developed quality checks and ETL scripts to standardize incoming environmental datasets, boosting accuracy and cutting rework by 25%.",
      "Delivered a lightweight retrieval-augmented generation (RAG) pipeline using LangChain and OpenAI APIs to speed research queries and reduce ad-hoc requests by 40%.",
      "Partnered with cross-functional teams to define KPIs, surface real-time performance dashboards, and accelerate decision cycles by 25%.",
    ],
  },
  {
    company: "University of North Dakota",
    role: "Graduate Research Assistant - Data Analytics & Forecasting",
    timeframe: "Jan 2022 - Aug 2024",
    location: "Grand Forks, ND",
    achievements: [
      "Led development of real-time data dashboards (Python, Flask, React) to modernize water quality monitoring for 40+ researchers and policymakers.",
      "Automated ingestion and preprocessing pipelines (AWS S3 + Python) that cut data preparation time by 70%, saving roughly $150K annually.",
      "Designed time-series forecasting models (VAR, ARIMAX, VECM) that improved forecast accuracy by 98%, helping agencies anticipate multimillion-dollar ecological risks.",
      "Implemented SHAP and LIME explainability to increase transparency of forecasts, contributing to more than $500K in grant funding.",
      "Championed reproducible research workflows and documentation that shortened onboarding time for new collaborators.",
    ],
  },
  {
    company: "Dakota Venture Group",
    role: "Managing Associate - Business Intelligence",
    timeframe: "Sep 2022 - Feb 2024",
    location: "Grand Forks, ND",
    achievements: [
      "Designed financial analytics dashboards for 100+ stakeholders, improving investment decision-making efficiency and driving a 20% lift in portfolio performance.",
      "Automated KPI tracking with SQL and Python scripts, saving more than 15 hours per month across the investment committee.",
    ],
  },
];

const projects = [
  {
    name: "Real-Time Environmental Forecasting Dashboard",
    tech: ["Python", "Flask", "React", "AWS"],
    highlights: [
      "Built a full-stack dashboard visualizing environmental IoT data with real-time updates and time-series forecasts, reaching 99.9% uptime on Heroku.",
      "Enabled EPA and state regulators to act faster by pairing predictive modeling with imagery analytics, improving forecast accuracy by 20%.",
    ],
    image: {
      src: "/OpenCast.png",
      alt: "OpenCast HAB real-time dashboard showing coastal bloom analytics and alert overlays.",
    },
  },
  {
    name: "GrantWatch RAG Assistant",
    tech: ["Next.js", "LangChain", "Neon Postgres", "OpenAI"],
    highlights: [
      "Deployed a retrieval-augmented generation workflow that parses grant requirements and summarizes eligibility, tripling internal research throughput.",
      "Introduced guardrails, analytics, and human-in-the-loop review states so natural-language querying stays precise and trustworthy.",
    ],
  },
  {
    name: "Executive Metrics Command Center",
    tech: ["React", "D3.js", "AWS", "Python"],
    highlights: [
      "Unified IoT, ERP, and lab datasets into a single command center that reduced manual reporting by 35% and surfaced live anomaly alerts.",
      "Designed the experience for executive and press briefings, with screenshot-ready layouts that tell clear performance stories.",
    ],
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "Analytics & Visualization",
    items: ["Tableau", "Power BI", "Plotly Dash", "Excel", "D3.js"],
  },
  {
    category: "Data Science & Modeling",
    items: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "Time Series"],
  },
  {
    category: "Data Engineering",
    items: ["AWS (S3, EC2, Terraform)", "Flask", "React", "Docker", "GitLab CI/CD"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "Jenkins", "Selenium", "Linux", "Jira", "LaTeX"],
  },
];

const education = [
  {
    school: "University of North Dakota",
    degree: "Master of Science in Computer Science",
    date: "May 2024",
    location: "Grand Forks, North Dakota",
    notes: [
      "Best Paper Award at ICRTEC '23",
      "Elliot Glashheim Essay Winner",
      "3-Minute Thesis Presenter",
    ],
  },
  {
    school: "University of North Dakota",
    degree: "Bachelor of Science in Biology",
    date: "December 2021",
    location: "Grand Forks, North Dakota",
    notes: [],
  },
];

const publications = [
  {
    title: "Multi-Variate Factors Assessment of Harmful Algal Blooms",
    venue: "ICRTEC '23",
    citation: "Sujatha, M.G., Patel, D., et al.",
    doi: "10.1019/ICRTEC56977.2023.1011916",
    link: "https://doi.org/10.1019/ICRTEC56977.2023.1011916",
  },
];

const contactChannels = [
  { label: "Email", value: "david.p8115@gmail.com", href: "mailto:david.p8115@gmail.com" },
  { label: "Phone", value: "701-739-4548", href: "tel:+17017394548" },
  { label: "LinkedIn", value: "linkedin.com/in/dave-patel1", href: "https://www.linkedin.com/in/dave-patel1/" },
  { label: "GitHub", value: "github.com/Dev-Chad-Omega", href: "https://github.com/Dev-Chad-Omega" },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-24 text-slate-900">
      <nav className="sticky top-6 z-30 mx-auto flex w-[min(1100px,calc(100%-32px))] items-center justify-between gap-6 rounded-full border border-slate-200 bg-white/80 px-6 py-3 backdrop-blur-2xl">
        <Link
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-slate-700 transition hover:text-slate-900"
        >
          Dave Patel
        </Link>
        <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition hover:text-slate-900 focus-visible:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          className="btn rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-slate-900"
          href="mailto:david.p8115@gmail.com"
        >
          Book a briefing
        </a>
      </nav>
      <GsapEffectsInit />

      <section
        id="home"
        className="relative mx-auto mt-10 w-[min(1100px,calc(100%-32px))] overflow-hidden rounded-[40px] border border-slate-200 bg-white/95 px-0 pb-1 pt-1"
      >
        <div className="hero-gradient" aria-hidden="true" />
        <canvas
          id="gradient-canvas"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-80 mix-blend-screen"
          aria-hidden="true"
        />
        <GradientLoader />
        <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20">
          <HeroContent heroHighlights={heroHighlights} />
        </div>
      </section>

      <section id="experience" className="mx-auto mt-12 w-[min(1100px,calc(100%-32px))] space-y-10">
        <header className="parallax-element flex flex-col gap-2" data-parallax data-parallax-speed="0.1" data-reveal>
          <span className="tag-pill w-max">Experience</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Amplifying impact from lab to boardroom</h2>
          <p className="max-w-2xl text-slate-600">
            Dave thrives at the intersection of analytics engineering, storytelling, and applied research. He ships
            systems that withstand press scrutiny while grounding policy conversations in trustworthy data.
          </p>
        </header>
        <div className="grid gap-8">
          {experiences.map((experience) => (
            <div key={experience.company} className="parallax-element" data-parallax data-parallax-speed="0.08">
              <article className="glass-card" data-reveal>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{experience.role}</h3>
                    <p className="text-slate-600">
                      {experience.company} - {experience.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-sm text-slate-600">
                    {experience.timeframe}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 text-sm text-slate-600 md:text-base">
                  {experience.achievements.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto mt-12 w-[min(1100px,calc(100%-32px))]">
        <header className="parallax-element flex flex-col gap-2" data-parallax data-parallax-speed="0.1" data-reveal>
          <span className="tag-pill w-max">Projects</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Case studies built for show-and-tell</h2>
          <p className="max-w-2xl text-slate-600">
            Each project pairs rigorous data engineering with accessible storytelling so that technical achievements
            resonate with press, partners, and policy leaders.
          </p>
        </header>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.name} className="parallax-element" data-parallax data-parallax-speed="0.09">
              <article className="glass-card group flex flex-col gap-4" data-reveal>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Feature
                  </span>
                </div>
                {project.image ? (
                  <div className="relative mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-sm">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-2 pt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto mt-12 w-[min(1100px,calc(100%-32px))]">
        <header className="parallax-element flex flex-col gap-2" data-parallax data-parallax-speed="0.09" data-reveal>
          <span className="tag-pill w-max">Skills</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Full-stack data fluency</h2>
          <p className="max-w-2xl text-slate-600">
            From modeling and explainability to infrastructure and stakeholder enablement, Dave brings a balanced
            toolkit tuned for analytics storytelling.
          </p>
        </header>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.category} className="parallax-element" data-parallax data-parallax-speed="0.07">
              <div className="glass-card" data-reveal>
                <h3 className="text-lg font-semibold text-slate-900">{skill.category}</h3>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
                  {skill.items.map((item) => (
                    <li key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto mt-12 w-[min(1100px,calc(100%-32px))]">
        <header className="parallax-element flex flex-col gap-2" data-parallax data-parallax-speed="0.08" data-reveal>
          <span className="tag-pill w-max">Education & Honors</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Grounded in research, ready for broadcast</h2>
          <p className="max-w-2xl text-slate-600">
            Academic rigor anchored Dave&apos;s work, earning national recognition while shaping practical tooling for
            environmental resilience.
          </p>
        </header>
        <div className="mt-8 grid gap-8">
          {education.map((entry) => (
            <div key={entry.degree} className="parallax-element" data-parallax data-parallax-speed="0.08">
              <article className="glass-card flex flex-col gap-4" data-reveal>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{entry.school}</h3>
                    <p className="text-slate-600">{entry.degree}</p>
                    <p className="text-sm text-slate-500">{entry.location}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-sm text-slate-600">
                    {entry.date}
                  </span>
                </div>
                {entry.notes.length > 0 && (
                  <ul className="grid gap-2 text-sm text-slate-600">
                    {entry.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-[min(1100px,calc(100%-32px))]">
        <header className="parallax-element flex flex-col gap-2" data-parallax data-parallax-speed="0.08" data-reveal>
          <span className="tag-pill w-max">Publications</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Peer-reviewed storytelling</h2>
          <p className="max-w-2xl text-slate-600">
            Dave&apos;s research explores how data can drive environmental resilience, bridging academic rigor with
            community-scale impact.
          </p>
        </header>
        <div className="mt-8 grid gap-6">
          {publications.map((pub) => (
            <div key={pub.title} className="parallax-element" data-parallax data-parallax-speed="0.07">
              <article className="glass-card flex flex-col gap-2" data-reveal>
                <h3 className="text-lg font-semibold text-slate-900">{pub.title}</h3>
                <p className="text-sm text-slate-500">{pub.citation}</p>
                <p className="text-sm text-slate-500">{pub.venue}</p>
                <a
                  className="btn button-glow w-max rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900"
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI: {pub.doi}
                </a>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mt-12 w-[min(1100px,calc(100%-32px))]">
        <header className="parallax-element flex flex-col gap-2" data-parallax data-parallax-speed="0.08" data-reveal>
          <span className="tag-pill w-max">Connect</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Let&apos;s get your audience aligned</h2>
          <p className="max-w-2xl text-slate-600">
            For press, partnerships, or strategic projects, use one of the channels below. Dave responds quickly and
            can share tailored briefings on request.
          </p>
        </header>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactChannels.map((channel) => (
            <div key={channel.label} className="parallax-element" data-parallax data-parallax-speed="0.04" data-reveal>
              <a
                className="glass-card contact-card no-underline transition hover:-translate-y-1 hover:shadow-lg"
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">{channel.label}</span>
                <p className="mt-2 text-lg font-semibold text-slate-900">{channel.value}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}





