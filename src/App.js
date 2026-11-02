const projects = [
  {
    name: "Sibonga Dental Clinic",
    description: "",
    link: "https://dental-clinic-front-end.vercel.app/",
    alternativeLink:
      "https://dental-clinic-front-end.vercel.app/",
    image: "picture/sibongaDental.png",
  },
  {
    name: "The Coliving Girl",
    link: "https://thecolivinggirl.com/",
    alternativeLink: "https://thecolivinggirl.com/",
    image: "picture/theColivingGirl.png",
  },
  {
    name: "Bakewell Street",
    description: "",
    link: "https://bakewell-street.vercel.app/",
    alternativeLink:
      "https://bakewell-street.vercel.app/",
    image: "picture/bakewell.png",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="title-header">JON</li>
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#projects-container">Projects</a>
        </li>
        <li>
          <a href="#about-container">About Me</a>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div id="main" className="main">
      <div className="main-tag">
        <h2>
          <span className="highlight"> Hello, I’m Jonathan Esguerra </span>
          passionate about creating clean, responsive web experiences using
          modern technologies.
        </h2>
      </div>
      <div>
        <img className="main-logo" src="picture/programmer.png" alt="Icon" />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects-container" className="projects-container">
      <h1> MY PROJECTS </h1>
      <div className="project-box">
        {projects.map((project) => {
          return (
            <Project
              name={project.name}
              link={project.link}
              alternativeLink={project.alternativeLink}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

function Project({ name, link, alternativeLink, image }) {
  return (
    <div className="project-body">
      <a
        href={link}
        alt={alternativeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2> {name}</h2>
        <img src={image} alt="sibongDental"></img>
      </a>
    </div>
  );
}

function AboutMe() {
  return (
    <div id="about-container" className="about-container">
      <div className="experience-box">
        <h1 className="highlight">ABOUT ME.</h1>
        <div className="experience-body">
          <p>
            I am a Bachelor of Science in Information Technology graduate from
            Quezon City University with hands-on experience in software
            development, low-code application development, and enterprise
            application support. I have a strong foundation in Oracle HCM,
            Oracle Integration Cloud, and full-stack web development using
            technologies like React, Node.js, SQL, and more.
          </p>
        </div>
      </div>
      <h1>TECHSTACKS</h1>
        <div className="icon-carousel">
        <div className="icon-group">
          <img src="picture/html.png" alt="HTML" />
          <img src="picture/css.png" alt="CSS" />
          <img src="picture/javascript.png" alt="JavaScript" />
          <img src="picture/node.png" alt="Node.js" />
          <img src="picture/mysql.png" alt="MySQL" />
          <img src="picture/zoho.svg" alt="Zoho" />
          <img src="picture/wordpress.png" alt="WordPress" />
          <img src="picture/ghl.svg" alt="GoHighLevel" />
        </div>

        <div className="icon-group" aria-hidden="true">
          <img src="picture/html.png" alt="" />
          <img src="picture/css.png" alt="" />
          <img src="picture/javascript.png" alt="" />
          <img src="picture/node.png" alt="" />
          <img src="picture/mysql.png" alt="" />
          <img src="picture/zoho.svg" alt="" />
          <img src="picture/wordpress.png" alt="" />
          <img src="picture/ghl.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <a
        href="https://github.com/Jon-18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="picture/github.png" alt="GITHUB LOGO" />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-esguerra-454268218/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="picture/linkedin.png" alt="LINKEDIN LOGO" />
      </a>
      <p>jonathan.c.esguerra@gmail.com</p>
    </footer>
  );
}

export default App;
