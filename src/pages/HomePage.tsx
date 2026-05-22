import Navigation from "../components/Navigation";
import Greeting from "../components/Greeting";
import { SkillCard } from "../components/BasicCards";
import ProjectCard from "../components/ProjectCard";

import javaLogo from "../assets/Java.svg";
import dartLogo from "../assets/Dart.svg";
import flutterLogo from "../assets/Flutter.svg";
import htmlLogo from "../assets/HTML5.svg";
import cssLogo from "../assets/CSS3.svg";
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

          <div className="skills-list">
            <SkillCard text="Java" image={javaLogo} />
            <SkillCard text="JAX-RS, JPA" image={javaLogo} />

            <SkillCard text="Dart" image={dartLogo} />
            <SkillCard text="Flutter" image={flutterLogo} />

            <SkillCard text="HTML" image={htmlLogo} />
            <SkillCard text="CSS" image={cssLogo} />
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
              tags={["Flutter", "Java", "Quarkus", "IoT", "C++", "Arduino"]}
              detailsPage="/projects/smart-home"
            >
              <p>
                A smart home system that integrates air quality measurement and
                smart lighting
              </p>
            </ProjectCard>
          </div>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Indoor_Localisation/thumbnail.png")}
              title="Indoor Localisation"
              tags={["Flutter", "IoT", "MQTT", "Team project"]}
              detailsPage="/projects/indoor-localisation"
            >
              <p>Mobile application for tracking assets</p>
            </ProjectCard>
          </div>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Secure_Chat/thumbnail.png")}
              title="Secure Chat"
              tags={["Flutter", "E2EE encryption", "WebSocket", "Team project"]}
              detailsPage="/projects/secure-chat"
            >
              <p>Simple secure E2EE chat application</p>
            </ProjectCard>
          </div>

          <div className="margin-top-50">
            <ProjectCard
              image={getImgPath("Moje_serije/thumbnail.png")}
              title="Moje serije"
              tags={["Angular", "TypeScript", "Node.js"]}
              detailsPage="/projects/moje-serije"
            >
              <p>Web application for viewing series</p>
            </ProjectCard>
          </div>
        </section>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
