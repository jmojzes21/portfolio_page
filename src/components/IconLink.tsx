import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./IconLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconLinkProps {
  href: string;
  text: string;
  icon: IconProp;
  target?: React.HTMLAttributeAnchorTarget;
}

export default function IconLink({ href, text, icon, target }: IconLinkProps) {
  return (
    <a className="icon-link" href={href} target={target}>
      <FontAwesomeIcon icon={icon} fontSize="2rem" />
      <span>{text}</span>
    </a>
  );
}
