import React from "react";

export default function Belikambing() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }} id="belikambing">
        <a href="https://belikambing.com" target="_blank" rel="noreferrer">
          Belikambing
        </a>
      </h2>

      <p>Dec 2018 - Jul 2019</p>

      <p>Marketplace for buying and selling livestocks in Indonesia.</p>

      <img src={"/portfolio/belikambing_1.png"} />

      <p>With social login.</p>

      <img src={"/portfolio/belikambing_2.png"} />

      <p>And admin dashboard.</p>

      <img src={"/portfolio/belikambing_3.png"} />

      <p>And payment.</p>

      <img src={"/portfolio/belikambing_4.png"} />

      <p>
        We were a three-person team, with I as the developer. We built this as a
        startup. We have legal entity. We launched and sold a couple of
        livestocks. I quit on July 2019 because I wanted to build another
        project, and my univesity period started :D.
      </p>

      <p>
        We built this with Ruby on Rails framework, as that&apos;s the framework
        I&apos;m most familiar with. We used popular gems like Devise, Rspec,
        Pundit, and Administrate. The project is hosted on Heroku.
      </p>
    </div>
  );
}
