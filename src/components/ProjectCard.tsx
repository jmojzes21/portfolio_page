import { Link } from "react-router";
import "./ProjectCard.scss";
import { appendClassName } from "../helpers/className";

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
  detailsPage?: string;

  className?: string;
  children?: React.ReactNode;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className={appendClassName("project-card", props.className)}>
      <div className="project-card-icon">
        <img alt={props.title} src={props.image} />
      </div>

      <div className="project-card-info">
        <p className="project-card-title">{props.title}</p>
        {props.children}

        <div className="project-card-tags">
          {props.tags.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>

        {props.detailsPage != null && (
          <div className="margin-top-20">
            <Link className="link-outlined" to={props.detailsPage}>
              Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
