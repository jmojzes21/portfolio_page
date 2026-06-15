import Header from "../components/Header";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";
import { ContentCard, TechStackCard } from "../components/BasicCards";

import appIcon from "../assets/il_app_icon.png";
import gearIcon from "../assets/gear.svg";
import usersIcon from "../assets/users.svg";
import flutterLogo from "../assets/Flutter.svg";
import postgresqlLogo from "../assets/Postgresql.svg";
import pythonLogo from "../assets/Python.svg";
import reactLogo from "../assets/React.svg";

export default function IndoorLocalisationPage() {
  return (
    <>
      <Header />

      <main>
        <div className="center-content text-content margin-top-100">
          <div className="icon-heading">
            <img
              className="icon-size-l rounded"
              alt="Indoor Localisation"
              src={appIcon}
            />
            <h1>Indoor Localisation</h1>
          </div>

          <p>
            The Indoor Localisation allows users to track assets within a
            facility. The application was developed as a team project in the
            Program Analysis and Development course as a Work-Based Learning
            project.
          </p>

          <ContentCard title="Features" image={gearIcon}>
            <ul className="margin-top-0">
              <li>
                Asset tracking within the facility in real time using MQTT
              </li>
              <li>Overview of available assets</li>
              <li>Overview of asset movement reports</li>
              <li>Model-View-ViewModel architecture</li>
              <li>Modular design (different ways to display live assets)</li>
              <li>
                Support for both real and mock web services to support
                application development without a running backend server
              </li>
            </ul>
          </ContentCard>

          <ContentCard
            className="margin-top-20"
            title="My role in the team"
            image={usersIcon}
          >
            <ul className="margin-top-0">
              <li>
                Developed the complete frontend of a mobile application using
                Flutter, including implementation of services for backend
                communication and data retrieval through APIs
              </li>
            </ul>
          </ContentCard>

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

          <h2 id="gallery" className="fragment-nav-target">
            Project gallery
          </h2>

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
