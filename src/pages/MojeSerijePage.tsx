import Navigation from "../components/Navigation";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";

export default function MojeSerijePage() {
  return (
    <>
      <Navigation />

      <main>
        <div className="center-content text-content margin-top-100">
          <div className="icon-heading">
            <img
              className="icon-size-l"
              alt="Moje serije"
              src={getImgPath("Moje_serije/icon.png")}
            />
            <h1>Moje serije</h1>
          </div>

          <p>
            Moje serije is a web application for viewing series created in the
            Development of Web Application course. The goal of this project was
            to develop both a backend and a frontend part of a web application.
          </p>

          <p>Features:</p>
          <ul>
            <li>
              Usage of an external service (
              <a
                href="https://developer.themoviedb.org/docs/getting-started"
                target="_blank"
              >
                TMDB API
              </a>
              )
            </li>
            <li>
              Usage of pagination to limit the showing a huge amount of data
            </li>
            <li>Integrating ReCAPTCHA on forms to prevent bots</li>
            <li>Two-factor authentication</li>
            <li>
              User authorization, different content for guests, basic and admin
              users
            </li>
            <li>OAuth login using GitHub</li>
          </ul>

          <h2>Technology stack</h2>
          <ul>
            <li>
              <b>Frontend:</b> Angular, TypeScript
            </li>
            <li>
              <b>Backend:</b> Node.js, Express.js, JavaScript
            </li>
            <li>
              <b>Database:</b> SQLite
            </li>
          </ul>

          <h2>Links</h2>
          <div>
            <IconLink
              href="https://github.com/jmojzes21/RWA-Projekt"
              icon={faGithub}
              text="GitHub repository"
              target="_blank"
            />
          </div>

          <h2 id="gallery">Project gallery</h2>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Home page for series search, including result pagination"
              src={getImgPath("Moje_serije/pocetna.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Some users can have 2FA enabled"
              src={getImgPath("Moje_serije/prijava_totp.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Users can save their favourite series"
              src={getImgPath("Moje_serije/omiljene.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Admin users can manage other users"
              src={getImgPath("Moje_serije/korisnici.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Admin users can see logs, including result pagination"
              src={getImgPath("Moje_serije/dnevnik.png")}
            />
          </div>
        </div>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
