import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./IconLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { joinClassName } from "../helpers/className";

interface IconLinkProps {
  href: string;
  text: string;
  icon: IconProp;
  horizontal: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}

export default function IconLink(p: IconLinkProps) {
  return (
    <a
      className={joinClassName([
        "icon-link",
        p.horizontal ? "horizontal" : "vertical",
        p.className,
      ])}
      href={p.href}
      target={p.target}
    >
      <FontAwesomeIcon icon={p.icon} fontSize="2rem" />
      <span>{p.text}</span>
    </a>
  );
}
