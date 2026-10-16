import "./App.css";

const projects = [
  {
    number: "01",
    title: "Netflix Clone",
    category: "MOVIE DISCOVERY PLATFORM",
    description:
      "A Netflix-inspired streaming interface featuring movie discovery and a responsive browsing experience using the TMDB API.",
    technologies: ["React", "JavaScript", "CSS", "TMDB API"],
    visual: "netflix",
    github: "https://github.com/ahmeddawuddev-lab/netflix-clone.git",
    demo: "https://ahmeddawud-netflix.vercel.app/",
  },

  {
    number: "02",
    title: "ChatGPT Clone",
    category: "AI-POWERED APPLICATION",
    description:
      "An AI chat application connecting a React frontend to a backend API, with Gemini integration and MySQL conversation storage.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Gemini API"],
    visual: "chatgpt",
    github: "https://github.com/ahmeddawuddev-lab/chatgpt-clone.git",
    demo: "https://chatgpt-clone-frontend-eight.vercel.app/",
  },
  {
    number: "03",
    title: "Evangadi Forum",
    category: "FULL-STACK COMMUNITY PLATFORM",
    description:
      "A collaborative question-and-answer platform with authentication, discussions, and AI-powered knowledge retrieval features.",
    technologies: ["React", "Node.js", "Express", "MySQL", "RAG"],
    visual: "forum",
    github: "https://github.com/ahmeddawuddev-lab/Forum_Project_Collab.git",
    demo: "https://ahmed-evangadi-forum.netlify.app/",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MySQL",
  "Git & GitHub",
  "Responsive Design",
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Go to homepage">
        <span>AD</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a className="nav-contact" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </div>

        <p className="eyebrow">HELLO, I'M AHMED DAWUD</p>

        <h1>
          Turning ideas
          <br />
          into <span className="gradient-text">digital</span>
          <br />
          experiences.
        </h1>

        <p className="hero-description">
          I'm an Electrical and Computer Engineering graduate passionate about
          building useful, modern web applications and solving real-world
          problems with code.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <span>↗</span>
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="hero-meta">
          <span>Ethiopia</span>
          <span className="meta-divider" />
          <span>Full-Stack Development</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Developer introduction graphic">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-glow" />

        <div className="code-card">
          <div className="code-card-header">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.js</span>
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span> developer = {"{"}
            </p>
            <p className="code-indent">
              name: <span className="code-green">'Ahmed Dawud'</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-green">'Full-Stack Developer'</span>,
            </p>
            <p className="code-indent">
              passion:{" "}
              <span className="code-green">'Building for the web'</span>,
            </p>
            <p className="code-indent">
              learning: <span className="code-green">'Always'</span>
            </p>
            <p>{"}"}</p>
            <br />
            <p>
              <span className="code-purple">const</span> buildFuture = (){" "}
              <span className="code-purple">=&gt;</span> {"{"}
            </p>
            <p className="code-indent">
              <span className="code-blue">create</span>(ideas);
            </p>
            <p className="code-indent">
              <span className="code-blue">solve</span>(problems);
            </p>
            <p>{"}"}</p>
          </div>

          <div className="code-card-footer">
            <span className="status-dot" />
            Ready to build something great
          </div>
        </div>

        <div className="floating-tag tag-top"> &lt;code /&gt; </div>
        <div className="floating-tag tag-bottom">
          Building · Learning · Growing
        </div>
      </div>

      <a className="scroll-indicator" href="#about">
        <span /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function SectionHeading({ label, title, accent }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>
        {title} <span className="gradient-text">{accent}</span>
      </h2>
    </div>
  );
}

function About() {
  return (
    <section className="section-container section-block" id="about">
      <SectionHeading
        label="A LITTLE ABOUT ME"
        title="Engineering a better"
        accent="digital world."
      />

      <div className="about-grid">
        <div className="about-copy">
          <p className="large-copy">
            I'm an Electrical and Computer Engineering graduate from the
            University of Gondar, Ethiopia. I'm building my skills as a
            Full-Stack Developer by creating web applications with React,
            Node.js, Express, and MySQL. I enjoy solving problems, learning new
            technologies, and turning ideas into practical solutions.
          </p>

          <a className="text-link" href="#projects">
            See what I've been building <span>→</span>
          </a>
        </div>

        <div className="about-card">
          <div className="about-card-icon">{"{ }"}</div>
          <h3>How I approach development</h3>

          <div className="principle">
            <span>01</span>
            <div>
              <h4>Think logically</h4>
              <p>Break problems into clear, manageable steps.</p>
            </div>
          </div>

          <div className="principle">
            <span>02</span>
            <div>
              <h4>Build with purpose</h4>
              <p>Create applications that solve real problems.</p>
            </div>
          </div>

          <div className="principle">
            <span>03</span>
            <div>
              <h4>Keep improving</h4>
              <p>Learn from feedback and improve every project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-container section-block" id="skills">
      <SectionHeading
        label="MY TOOLKIT"
        title="Skills I'm bringing"
        accent="to the table."
      />

      <p className="section-description">
        Technologies I've studied and used across my learning journey and
        hands-on projects.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{skill}</span>
            <span className="skill-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-visual ${project.visual}`}>
        <div className="project-visual-top">
          <span>PROJECT / {project.number}</span>
          <span>↗</span>
        </div>

        {project.visual === "netflix" && (
          <div className="netflix-art">
            <span className="netflix-n">N</span>
            <div>
              <span className="art-kicker">YOUR NEXT WATCH</span>
              <h3>
                Stories
                <br />
                worth watching.
              </h3>
              <span className="art-pill">EXPLORE TITLES</span>
            </div>
          </div>
        )}

        {project.visual === "chatgpt" && (
          <div className="chat-art">
            <div className="chat-symbol">✳</div>
            <span className="art-kicker">AI CONVERSATION</span>
            <div className="chat-line long" />
            <div className="chat-line short" />
            <div className="chat-line medium" />
          </div>
        )}

        {project.visual === "forum" && (
          <div className="forum-art">
            <div className="forum-icon">{"{ ? }"}</div>
            <span className="art-kicker">ASK · SHARE · LEARN</span>
            <div className="forum-row">
              <i /> Community questions
            </div>
            <div className="forum-row">
              <i /> Knowledge sharing
            </div>
            <div className="forum-row">
              <i /> AI-powered retrieval
            </div>
          </div>
        )}
      </div>

      <div className="project-info">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub <span>↗</span>
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link-secondary"
            >
              Live demo <span>↗</span>
            </a>
          ) : (
            <span className="demo-pending">Live demo link to be added</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section-container section-block" id="projects">
      <SectionHeading
        label="SELECTED WORK"
        title="Projects built with"
        accent="curiosity."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-container contact-section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's build something
          <br />
          <span className="gradient-text">meaningful.</span>
        </h2>
        <p>
          I'm interested in learning, collaborating, and exploring opportunities
          to build useful digital products.
        </p>

        <div className="hero-actions contact-actions">
          <a href="mailto:ahmed.dawud.dev@gmail.com">
            ahmed.dawud.dev@gmail.com
          </a>
          <a
            href="https://github.com/ahmeddawuddev-lab"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-dawud-66a391377"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
          <p className="eth">Ethiopia</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-container">
      <a className="brand" href="#home">
        <span>AD</span>
      </a>
      <p>Designed with purpose. Built with code.</p>
      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
      <span className="copyright">© {new Date().getFullYear()}</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
