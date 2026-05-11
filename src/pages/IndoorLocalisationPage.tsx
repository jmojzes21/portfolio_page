import Navigation from "../components/Navigation";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function IndoorLocalisationPage() {
  return (
    <>
      <Navigation />

      <main>
        <div className="center-content text-content margin-top-100">
          <h1>Indoor Localisation</h1>

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
            <li>
              Modular design (different ways to display live assets) Support for
              both real and mock web services to support application development
              without a running backend server
            </li>
          </ul>

          <h3>Technology stack</h3>
          <ul>
            <li>
              <b>Frontend:</b> Flutter (Android, Windows for development), React
              (Web)
            </li>
            <li>
              <b>Backend:</b> Python FastAPI, Node-RED
            </li>
            <li>
              <b>Database:</b> PostgreSQL
            </li>
          </ul>

          <h3>Links</h3>
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
              src="/Indoor_Localisation/live_asset_position.mp4"
              landscape={false}
            />
            <ProjectScreenshot
              description="Real-time asset heatmap"
              src="/Indoor_Localisation/live_heatmap.mp4"
              landscape={false}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Assets overview"
              src="/Indoor_Localisation/assets.jpg"
              landscape={false}
            />
            <ProjectScreenshot
              description="Table view of asset location"
              src="/Indoor_Localisation/dashboard_table.jpg"
              landscape={false}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Asset heatmap report"
              src="/Indoor_Localisation/heatmap.jpg"
              landscape={false}
            />
            <ProjectScreenshot
              description="Asset tailmap report with timeline"
              src="/Indoor_Localisation/tailmap.jpg"
              landscape={false}
            />
            <ProjectScreenshot
              description="Asset zone retention report"
              src="/Indoor_Localisation/zone_retention.jpg"
              landscape={false}
            />
          </div>
        </div>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
