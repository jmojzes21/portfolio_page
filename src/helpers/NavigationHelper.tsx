import { useEffect } from "react";
import { useLocation } from "react-router";

function navigate(hash: string) {
  if (hash.startsWith("#")) {
    let id = hash.substring(1);
    let element = document.getElementById(id);

    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function NavigationHelper() {
  let location = useLocation();

  useEffect(() => {
    setTimeout(() => navigate(location.hash));
  }, [location.hash]);

  return null;
}
