import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

function navigate(hash: string) {
  if (hash.startsWith("#")) {
    let id = hash.substring(1);
    let element = document.getElementById(id);

    if (element != null) {
      element.scrollIntoView();
    }
    return;
  }

  window.scrollTo({ top: 0 });
}

export default function NavigationHelper() {
  let location = useLocation();
  useLayoutEffect(
    () => navigate(location.hash),
    [location.pathname, location.hash],
  );
  return null;
}
