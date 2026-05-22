import Navigation from "../components/Navigation";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";
import { TechStackCard } from "../components/BasicCards";

import flutterLogo from "../assets/Flutter.svg";
import postgresqlLogo from "../assets/Postgresql.svg";
import pythonLogo from "../assets/Python.svg";
import reactLogo from "../assets/React.svg";

export default function IndoorLocalisationPage() {
  return (
    <>
      <Navigation />

      <main>
        <div className="center-content text-content margin-top-100">
          <div className="icon-heading">
            <img
              className="icon-size-l rounded"
              alt="Indoor Localisation"
              src={getImgPath("Indoor_Localisation/app_icon.png")}
            />
            <h1>Indoor Localisation</h1>
          </div>

          <p>
            The Indoor Localisation is a Flutter application designed to track
            assets within a facility. The application was developed as a team
            project in the Program Analysis and Development course as a
            Work-Based Learning project. My role in the team was to create a
            mobile application and integrate it with the backend server.
          </p>

          <p>Features:</p>
          <ul>
            <li>Asset tracking within the facility in real time using MQTT</li>
            <li>Interactive facility map (zooming, panning)</li>
            <li>Overview of available assets</li>
            <li>Overview of asset movement reports</li>
            <li>Model-View-ViewModel architecture</li>
            <li>Modular design (different ways to display live assets)</li>
            <li>
              Support for both real and mock web services to support application
              development without a running backend server
            </li>
          </ul>

          <h2>Technology stack</h2>
          <div className="tech-stack-list">
            <TechStackCard
              title="Frontend"
              text="Flutter (Android, Windows for development)"
              image={flutterLogo}
            />{" "}
            <TechStackCard
              title="Frontend"
              text="React (Web)"
              image={reactLogo}
            />
            <TechStackCard
              title="Backend"
              text="Python FastAPI, Node-RED"
              image={pythonLogo}
            />
            <TechStackCard
              title="Database"
              text="PostgreSQL"
              image={postgresqlLogo}
            />
          </div>

          <h2>Links</h2>
          <div>
            <IconLink
              href="https://github.com/jmojzes21/indoor_localisation_mobile_app"
              icon={faGithub}
              text="GitHub repository"
              target="_blank"
            />
          </div>

          <h2 id="gallery">Project gallery</h2>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Real-time assets tracking"
              src={getImgPath("Indoor_Localisation/live_asset_position.mp4")}
              landscape={false}
            />
            <ProjectScreenshot
              description="Real-time asset heatmap"
              src={getImgPath("Indoor_Localisation/live_heatmap.mp4")}
              landscape={false}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Assets overview"
              src={getImgPath("Indoor_Localisation/assets.jpg")}
              landscape={false}
            />
            <ProjectScreenshot
              description="Table view of asset location"
              src={getImgPath("Indoor_Localisation/dashboard_table.jpg")}
              landscape={false}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Asset heatmap report"
              src={getImgPath("Indoor_Localisation/heatmap.jpg")}
              landscape={false}
            />
            <ProjectScreenshot
              description="Asset tailmap report with timeline"
              src={getImgPath("Indoor_Localisation/tailmap.jpg")}
              landscape={false}
            />
            <ProjectScreenshot
              description="Asset zone retention report"
              src={getImgPath("Indoor_Localisation/zone_retention.jpg")}
              landscape={false}
            />
          </div>
        </div>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
