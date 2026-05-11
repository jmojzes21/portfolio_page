import { useEffect } from "react";
import { useLocation } from "react-router";

export default function NavigationHelper() {
  let location = useLocation();

  useEffect(() => {
    let hash = location.hash;
    if (hash.startsWith("#")) {
      let id = hash.substring(1);
      let element = document.getElementById(id);

      if (element != null) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  return null;
}
