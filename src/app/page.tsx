const projects = [
  {
    title: "Design System",
    description: "A reusable component library for fast, consistent product work.",
    tag: "Frontend",
  },
  {
    title: "Analytics Dashboard",
    description: "A clean dashboard experience for tracking growth and product signals.",
    tag: "Next.js",
  },
  {
    title: "Creative Lab",
    description: "Small experiments with motion, interaction, and visual storytelling.",
    tag: "UI",
  },
];

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI Design", "Performance"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a href="#" className="brand">
            MyHub
          </a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Portfolio</p>
          <h1>Xin chao, minh la mot frontend developer.</h1>
          <p className="intro">
            Minh tao ra nhung trai nghiem web nhanh, ro rang va co cam giac
            dang tin cay cho nguoi dung.
          </p>
          <div className="actions">
            <a href="#work" className="button primary">
              Xem du an
            </a>
            <a href="mailto:hello@example.com" className="button secondary">
              Lien he
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="sectionHeader">
          <p className="eyebrow">Selected Work</p>
          <h2>Nhung du an gan day</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="skills">
        <div>
          <p className="eyebrow">Skills</p>
          <h2>Cong cu minh dung de bien y tuong thanh san pham.</h2>
        </div>
        <div className="skillList">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>San sang xay dung dieu tiep theo?</h2>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </section>
    </main>
  );
}
