import React from "react";

export default function Disjoy() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }} id="disjoy">
        <a href="https://disjoy.com" target="_blank" rel="noreferrer">
          Disjoy
        </a>
      </h2>

      <p>Apr 2017 - Dec 2017</p>

      <p>
        Reddit-like site for Indonesians that we launched in 2017 with name
        Table.id. Spent Rp 10.000.000 for initial traction.
        <i>
          <b> 22.000 users </b>
        </i>
        visited site on the first week of launching. Sadly we couldn&apos;t keep
        the organic growth and the site slowly died.
      </p>

      <img src={"/portfolio/disjoy_1.png"} />

      <p>A lot of comments.</p>

      <img src={"/portfolio/disjoy_2.png"} />

      <p>
        We used Ruby on Rails as usual for the project. Hosted on AWS Lightsail
        with Managed Database for the database.
      </p>

      <p>
        We really want to rerelease the project with the name of Disjoy. And we
        want to focus on Android and iOS apps so hopefully we can maintain the
        user retention better with notifications and stuffs.
      </p>
    </div>
  );
}
