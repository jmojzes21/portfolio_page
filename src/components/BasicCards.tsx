import type { ReactNode } from "react";
import "./BasicCards.scss";
import { appendClassName } from "../helpers/className";

interface SkillCardProps {
  text: string;
  image: string;
}

interface TechStackCardProps {
  title: string;
  text: string;
  image: string;
}

interface ContentCardProps {
  title: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export function SkillCard({ text, image }: SkillCardProps) {
  return (
    <div className="skill-card">
      <img alt={text} src={image} />
      <span>{text}</span>
    </div>
  );
}

export function TechStackCard(props: TechStackCardProps) {
  return (
    <div className="tech-stack-card">
      <img alt={props.text} src={props.image} />
      <div className="tech-stack-card-info">
        <div className="tech-stack-card-title">{props.title}</div>
        <div className="tech-stack-card-text">{props.text}</div>
      </div>
    </div>
  );
}

export function ContentCard(props: ContentCardProps) {
  return (
    <div className={appendClassName("content-card", props.className)}>
      {props.image != null && (
        <div className="icon-heading">
          <img className="icon-size-m" alt={props.title} src={props.image} />
          <h3>{props.title}</h3>
        </div>
      )}

      {props.image == null && <h3>{props.title}</h3>}

      {props.children}
    </div>
  );
}
