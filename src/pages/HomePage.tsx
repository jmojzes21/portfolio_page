import Navigation from "../components/Navigation";
import Greeting from "../components/Greeting";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";

import javaLogo from "../assets/Java.svg";
import dartLogo from "../assets/Dart.svg";
import flutterLogo from "../assets/Flutter.svg";
import typeScriptLogo from "../assets/TypeScript.svg";
import nodejsLogo from "../assets/NodeJS.svg";
import angularLogo from "../assets/Angular.png";
import cppLogo from "../assets/Cpp.svg";
import csharpLogo from "../assets/CSharp.svg";
import pythonLogo from "../assets/Python.svg";
import postgresqlLogo from "../assets/Postgresql.svg";
import linuxLogo from "../assets/Linux.svg";
import intellijIdeaLogo from "../assets/IntelliJ_IDEA.svg";
import visualStudioLogo from "../assets/Visual_Studio.svg";
import vsCodeLogo from "../assets/VS_Code.svg";
import gitLogo from "../assets/Git.svg";
import IconLink from "../components/IconLink";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main className="center-content">
        <div className="margin-top-100">
          <Greeting />
        </div>

        <section id="contact" className="margin-top-100">
          <h2>Contact</h2>

          <div>
            <div>
              <IconLink
                href="mailto:josip.mojzes12345@gmail.com"
                icon={faEnvelope}
                text="josip.mojzes12345@gmail.com"
                target="_blank"
              />
            </div>

            <div className="margin-top-10">
              <IconLink
                href="https://github.com/jmojzes21"
                icon={faGithub}
                text="GitHub"
                target="_blank"
              />
            </div>

            <div className="margin-top-10">
              <IconLink
                href="https://www.linkedin.com/in/josip-mojzes-ab22112bb/"
                icon={faLinkedin}
                text="LinkedIn"
                target="_blank"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="margin-top-50">
          <h2>Skills</h2>

          <div className="skills-container">
            <SkillCard text="Java" image={javaLogo} />
            <SkillCard text="JAX-RS, JPA" image={javaLogo} />

            <SkillCard text="Dart" image={dartLogo} />
            <SkillCard text="Flutter" image={flutterLogo} />

            <SkillCard text="TypeScript" image={typeScriptLogo} />
            <SkillCard text="Node.js" image={nodejsLogo} />
            <SkillCard text="Angular" image={angularLogo} />

            <SkillCard text="C++" image={cppLogo} />
            <SkillCard text="C#" image={csharpLogo} />
            <SkillCard text="Python" image={pythonLogo} />
            <SkillCard text="PostgreSQL" image={postgresqlLogo} />

            <SkillCard text="Linux" image={linuxLogo} />
            <SkillCard text="IntelliJ IDEA" image={intellijIdeaLogo} />
            <SkillCard text="Visual Studio" image={visualStudioLogo} />
            <SkillCard text="VS Code" image={vsCodeLogo} />
            <SkillCard text="Git" image={gitLogo} />
          </div>
        </section>

        <section id="projects" className="margin-top-50">
          <h2>Projects</h2>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Smart_Home/thumbnail.png")}
              title="Smart Home"
              tags={["Flutter", "C++", "Arduino", "IoT", "Java"]}
              detailsPage="/projects/smart-home"
            >
              <p>
                Smart Home is a system that integrates small IoT devices
                connected within a local network, providing a simple user
                experience. Smart Home supports air quality measuring devices
                and smart lighting.
              </p>
            </ProjectCard>
          </div>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Indoor_Localisation/thumbnail.png")}
              title="Indoor Localisation"
              tags={["Flutter", "IoT", "MQTT"]}
              detailsPage="/projects/indoor-localisation"
            >
              <p>
                The Indoor Localisation is an application designed to track
                assets within a facility. The application was developed as a
                team project in the Program Analysis and Development course as a
                Work-Based Learning project.
              </p>
            </ProjectCard>
          </div>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Secure_Chat/thumbnail.png")}
              title="Secure Chat"
              tags={["Flutter", "E2EE encryption", "WebSocket"]}
              detailsPage="/projects/secure-chat"
            >
              <p>
                Secure Chat is a simple chat application with privacy and
                security in focus. It uses end-to-end encryption (E2EE) to
                ensure that only end users can see messages.
              </p>
            </ProjectCard>
          </div>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Moje_serije/thumbnail.png")}
              title="Moje serije"
              tags={["Angular", "TypeScript", "Node.js"]}
              detailsPage="/projects/moje-serije"
            >
              <p>
                Moje serije is a web application for viewing series created in
                the Web Application Development course. The goal of this project
                was to develop both a backend and a frontend part of a web
                application.
              </p>
            </ProjectCard>
          </div>
        </section>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
