import "./ProjectScreenshot.scss";

interface ProjectScreenshotProps {
  src: string;
  description: string;
  landscape?: boolean;
}

export default function ProjectScreenshot(props: ProjectScreenshotProps) {
  let isVideo = props.src.endsWith(".mp4");
  let isLandscape = props.landscape ?? true;

  return (
    <div className="screenshot">
      <p>{props.description}</p>

      {isVideo ? (
        <video className={isLandscape ? "landscape" : "portrait"} controls>
          <source src={props.src} />
        </video>
      ) : (
        <img
          className={isLandscape ? "landscape" : "portrait"}
          alt={props.description}
          src={props.src}
        />
      )}
    </div>
  );
}
