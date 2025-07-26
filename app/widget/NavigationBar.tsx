import React from "react";
import { useLocation } from "react-router";
import clsx from "clsx";

const LINKS = [
  { id: 0, key: "legacies", label: "Legacies" },
  { id: 1, key: "trainees", label: "Trainees" },
  { id: 2, key: "support_cards", label: "Support Cards" },
];

const NavigationBar = () => {
  const location = useLocation();
  return (
    <div className="flex items-center justify-center py-1">
      {
        LINKS.map((link, idx) => (
          <React.Fragment key={ link.key }>
            { idx > 0 && <span className="text-xs text-label/50">|</span> }
            <a href={ `/${ link.key }` }><div className={ clsx("text-label px-4", { "underline": location.pathname.endsWith(link.key) }) }>{ link.label }</div></a>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default NavigationBar;