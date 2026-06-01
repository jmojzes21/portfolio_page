import Navigation from "../components/Navigation";
import IconLink from "../components/IconLink";
import ProjectScreenshot from "../components/ProjectScreenshot";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImgPath } from "../helpers/basePath";
import { ContentCard, TechStackCard } from "../components/BasicCards";

import appIcon from "../assets/smart_home_app_icon.png";
import windIcon from "../assets/wind.png";
import smartLedsIcon from "../assets/smart_leds.png";
import flutterLogo from "../assets/Flutter.svg";
import javaLogo from "../assets/Java.svg";
import cppLogo from "../assets/Cpp.svg";
import postgresqlLogo from "../assets/Postgresql.svg";

export default function SmartHomePage() {
  return (
    <>
      <Navigation />

      <main>
        <div className="center-content text-content margin-top-100">
          <div className="icon-heading">
            <img className="icon-size-l" alt="Smart Home" src={appIcon} />
            <h1>Smart Home</h1>
          </div>

          <p>
            Smart Home is a system that integrates small IoT devices connected
            within a local network, providing a simple user experience. Smart
            Home supports air quality measuring devices and smart lighting. In
            the beginning, each device had its own application. That was not
            scalable and those applications were integrated into this one.
          </p>

          <ContentCard title="Key highlights">
            <ul className="margin-top-0">
              <li>
                Caching the user profile and device list when the backend is not
                running
              </li>
              <li>
                Support for a virtual air quality device for development without
                hardware
              </li>
              <li>
                Support for local execution of lighting logic because uploading
                the firmware takes time
              </li>
            </ul>
          </ContentCard>

          <ContentCard
            className="margin-top-20"
            title="Air quality measurement"
            image={windIcon}
          >
            <ul className="margin-top-0">
              <li>
                Air quality measurement (temperature, humidity, pressure, PM2.5)
              </li>
              <li>Saving recent measurements on the device</li>
              <li>Saving measurements to the database for permanent storage</li>
              <li>Overview of device status (WiFi signal, RAM usage, etc.)</li>
              <li>Manage device settings</li>
              <li>
                Real and virtual device support for development without hardware
              </li>
            </ul>
          </ContentCard>

          <ContentCard
            className="margin-top-20"
            title="Smart lighting"
            image={smartLedsIcon}
          >
            <ul className="margin-top-0">
              <li>Lighting control</li>
              <li>Power consumption monitoring</li>
              <li>Firmware update using OTA (Over-the-air)</li>
              <li>
                Running the lighting effects code locally for faster development
              </li>
            </ul>
          </ContentCard>

          <h2>Technology stack</h2>
          <div className="tech-stack-list">
            <TechStackCard
              title="Frontend"
              text="Flutter (Android, Windows)"
              image={flutterLogo}
            />
            <TechStackCard
              title="Backend"
              text="Java Quarkus, Hibernate ORM"
              image={javaLogo}
            />
            <TechStackCard
              title="Embedded"
              text="C++, Arduino, ESP32"
              image={cppLogo}
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
              href="https://github.com/jmojzes21/Smart_Home"
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
              description="User devices and their availability status"
              src={getImgPath("Smart_Home/devices_page.jpg")}
              landscape={false}
            />
            <ProjectScreenshot
              description="Current environmental data and air quality"
              src={getImgPath("Smart_Home/aq_home.jpg")}
              landscape={false}
            />
            <ProjectScreenshot
              description="History data from the database"
              src={getImgPath("Smart_Home/aq_history.jpg")}
              landscape={false}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Recent data saved locally on the device (Desktop screen)"
              src={getImgPath("Smart_Home/aq_recent.png")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Device information and settings"
              src={getImgPath("Smart_Home/aq_advanced.jpg")}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Control lighting effects"
              src={getImgPath("Smart_Home/leds_home.jpg")}
              landscape={false}
            />
            <ProjectScreenshot
              description="Energy consumption"
              src={getImgPath("Smart_Home/leds_power.jpg")}
              landscape={false}
            />
          </div>

          <div className="screenshot-group">
            <ProjectScreenshot
              description="Updating firmware to a new version using an OTA update"
              src={getImgPath("Smart_Home/leds_ota.png")}
            />
          </div>
        </div>

        <div className="bottom-space"></div>
      </main>
    </>
  );
}
