import React from "react";

import Permission from "../components/portfolio/Permission";
import Kbri from "../components/portfolio/Kbri";
import Belikambing from "../components/portfolio/Belikambing";
import Disjoy from "../components/portfolio/Disjoy";

export default function Portfolio() {
  return (
    <main className="prose prose-invert">
      <h1>Portfolio</h1>

      <h4>Projects:</h4>
      <ul>
        <li>
          <a href="#permission">Dormitory Permission App</a>
        </li>
        <li>
          <a href="#attendance">Attendance System for Indonesian Embassy</a>
        </li>
        <li>
          <a href="#belikambing">
            Belikambing - Marketplace for buying and selling livestocks
          </a>
        </li>
        <li>
          <a href="#disjoy">Disjoy - Reddit for the rest of the world</a>
        </li>
      </ul>

      <Permission />
      <Kbri />
      <Belikambing />
      <Disjoy />
    </main>
  );
}
