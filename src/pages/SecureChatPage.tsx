import Navigation from "../components/Navigation";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";

export default function SecureChatPage() {
  return (
    <>
      <Navigation />

      <main>
        <div className="center-content text-content margin-top-100">
          <h1>Secure Chat</h1>

          <p>
            Secure Chat is a simple chat application with privacy and security
            in focus. It uses end-to-end encryption (E2EE) to ensure that only
            end users can see messages. The application was developed as a team
            project, with my part being to develop the Flutter application and
            to implement E2EE encryption.
          </p>

          <p>Key highlights:</p>
          <ul>
            <li>Real-time chat between users</li>
            <li>Usage of WebSocket to send messages over secure HTTPS</li>
            <li>Secure communication using E2EE encryption</li>
            <li>Secret key exchange using X25519</li>
            <li>Saving the user's chat history locally (AES encrypted)</li>
          </ul>

          <h3>Technology stack</h3>
          <ul>
            <li>
              <b>Frontend:</b> Flutter
            </li>
            <li>
              <b>Backend:</b> Python FastAPI
            </li>
          </ul>

          <h3>Links</h3>
          <div>
            <IconLink
              href="https://github.com/jmojzes21/secure_chat_app"
              icon={faGithub}
              text="GitHub repository"
              target="_blank"
            />
          </div>

          <h2 id="gallery">Project gallery</h2>

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
