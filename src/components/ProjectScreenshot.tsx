import { AppearAnimation } from "./Animations";
import "./ProjectScreenshot.scss";

interface ProjectScreenshotProps {
  src: string;
  description: string;
  landscape?: boolean;
}

export default function ProjectScreenshot(props: ProjectScreenshotProps) {
  let isVideo = props.src.endsWith(".mp4");
  let isLandscape = props.landscape ?? true;
  let className = isLandscape ? "landscape" : "portrait";

  return (
    <AppearAnimation>
      <div className="screenshot-container">
        <p>{props.description}</p>

        <div>
          {isVideo ? (
            <video className={className} controls>
              <source src={props.src} />
            </video>
          ) : (
            <img
              className={className}
              src={props.src}
              alt={props.description}
            />
          )}
        </div>
      </div>
    </AppearAnimation>
  );
}
