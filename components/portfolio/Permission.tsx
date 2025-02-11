import React from "react";

import permission_1 from "../../public/portfolio/permission_1.png";
import permission_2 from "../../public/portfolio/permission_2.png";
import permission_3 from "../../public/portfolio/permission_3.png";
import permission_4 from "../../public/portfolio/permission_4.png";

export default function Permission() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }} id="permission">
        Domitory Permission App
      </h2>

      <p>Jun 2017 - Jun 2020</p>

      <p>
        Application used by students for requesting permission when they want to
        go out from dormitory. For Android and iOS.
      </p>

      <p>
        <a href="https://play.google.com/store/apps/details?id=com.asramapribadi.asramapribadi">
          Google Play Link
        </a>
        <br />
        <a href="https://apps.apple.com/us/app/asrama-pribadi/id1479334469?ls=1">
          App Store Link
        </a>
      </p>

      <p>Students can request permission from the app.</p>
      <img
        src={"/portfolio/permission_1.png"}
        height="410px"
        style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      />

      <p>
        Dormitory supervisor then will get a notification, and they can approve
        or reject the permission.
      </p>

      <img
        src={"/portfolio/permission_2.png"}
        height="410px"
        style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      />

      <p>
        The student will get notification again whether their permission is
        accepted. Then the student can go to the security.
      </p>

      <img
        src={"/portfolio/permission_3.png"}
        height="410px"
        style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      />

      <p>
        The security will ask the student name, and check on system whether the
        student has permission or not, and whether it&apos;s already time to go
        or not.
      </p>

      <img src={"/portfolio/permission_4.png"} />

      <p>
        Using this application we could log time when student went and when
        student arrived. The application is used daily by ~200 students, and
        maybe will be used for other schools.
      </p>

      <p>
        We use React Native for this project, because we need to target both
        Android and iOS, and we don&apos;t have a lot of developer resource,
        only I for now. For the backend we use Ruby on Rails for the API and
        Managed Database on Lightsail for the database. The project is run on
        AWS Lightsail with Dokku.
      </p>
    </div>
  );
}
