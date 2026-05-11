import { NavLink } from "react-router";
import "./ProjectCard.scss";

interface ProjectCardProps {
  title: string;
  image?: string;
  tags: string[];
  detailsPage?: string;
  children?: React.ReactNode;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-icon">
        {props.image != null ? (
          <img alt={props.title} src={props.image} />
        ) : (
          <div></div>
        )}
      </div>

      <div className="project-info">
        <p className="title">{props.title}</p>
        {props.children}

        <div className="tags">
          {props.tags.map((e) => (
            <span>{e}</span>
          ))}
        </div>

        {props.detailsPage != null && (
          <div className="margin-top-20">
            <NavLink to={props.detailsPage}>
              <button className="outlined">Details</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
