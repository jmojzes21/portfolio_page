import "./SkillCard.scss";

interface SkillCardProps {
  text: string;
  image?: string;
}

export default function SkillCard({ text, image }: SkillCardProps) {
  return (
    <div className="skill-card">
      {image != null && <img alt={text} src={image} />}
      <span>{text}</span>
    </div>
  );
}
