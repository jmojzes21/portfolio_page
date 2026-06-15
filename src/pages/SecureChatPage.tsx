import Header from "../components/Header";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";
import { ContentCard, TechStackCard } from "../components/BasicCards";

import appIcon from "../assets/sc_app_icon.png";
import flutterLogo from "../assets/Flutter.svg";
import pythonLogo from "../assets/Python.svg";
import sqliteLogo from "../assets/Sqlite.svg";
import gearIcon from "../assets/gear.svg";
import usersIcon from "../assets/users.svg";

export default function SecureChatPage() {
  return (
    <>
      <Header />

      <main>
        <div className="center-content text-content margin-top-100">
          <div className="icon-heading">
            <img
              className="icon-size-l rounded"
              alt="Secure Chat"
              src={appIcon}
            />
            <h1>Secure Chat</h1>
          </div>

          <p>
            Secure Chat is a simple chat application with security in focus. It
            uses end-to-end encryption (E2EE) to ensure that only end users can
            see messages.
          </p>

          <ContentCard title="Features" image={gearIcon}>
            <ul className="margin-top-0">
              <li>Real-time chat between users</li>
              <li>Usage of WebSocket to send messages over secure HTTPS</li>
              <li>Secure communication using E2EE encryption</li>
              <li>Secret key exchange using X25519</li>
              <li>Saving the user's chat history locally (AES encrypted)</li>
            </ul>
          </ContentCard>

          <ContentCard
            className="margin-top-20"
            title="My role in the team"
            image={usersIcon}
          >
            <ul className="margin-top-0">
              <li>
                Developed the complete frontend of the application using Flutter
              </li>
              <li>Implemented E2EE encryption logic on the application</li>
            </ul>
          </ContentCard>

          <h2>Technology stack</h2>
          <div className="tech-stack-list">
            <TechStackCard
              title="Frontend"
              text="Flutter"
              image={flutterLogo}
            />
            <TechStackCard
              title="Backend"
              text="Python FastAPI"
              image={pythonLogo}
            />
            <TechStackCard title="Database" text="SQLite" image={sqliteLogo} />
          </div>

          <h2>Links</h2>
          <div>
            <IconLink
              href="https://github.com/jmojzes21/secure_chat_app"
              icon={faGithub}
              text="GitHub repository"
              target="_blank"
            />
          </div>

          <h2 id="gallery" className="fragment-nav-target">
            Project gallery
          </h2>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Secure E2EE chat between users"
              src={getImgPath("Secure_Chat/secure_chat.mp4")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Users can talk to each other"
              src={getImgPath("Secure_Chat/users.png")}
            />
            <ProjectScreenshot
              description="Secret key for each E2EE chat"
              src={getImgPath("Secure_Chat/secret_key.png")}
            />
          </div>
        </div>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
