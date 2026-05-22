import "./BasicCards.scss";

interface SkillCardProps {
  text: string;
  image: string;
}

interface TechStackCardProps {
  title: string;
  text: string;
  image: string;
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
