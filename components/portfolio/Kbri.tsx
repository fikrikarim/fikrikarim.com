import React from "react";

export default function Kbri() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }} id="attendance">
        Attendance System for Indonesian Embassy
      </h2>

      <p>Jun 2018 - Jun 2021</p>

      <p>
        Barcode-scanning attendance web application system that&apos;s used by
        Indonesian Embassy in Thailand for year events that are attended by `
        {">"}`600 Country&apos;s VIPs including 39 ambassadors.
      </p>

      <p>
        The application is used by admins on the receptionist table. After
        logging in, admins choose the event they are working on.
      </p>
      <img src={"/portfolio/kbri_1.png"} />
      <p>
        Then, admins scan the invitation card of each guest using barcode
        scanner.
      </p>
      <img src={"/portfolio/kbri_2.png"} />
      <p>
        The application fetchs the database of the guest from a Google Sheet,
        then shows it to see whether the card is correct or not.
      </p>
      <img src={"/portfolio/kbri_3.png"} />
      <p>
        We use Google Sheet as a database so admins can easily add and modify
        the database.
      </p>
      <img src={"/portfolio/kbri_4.png"} />
      <p>
        After confirming the information, admins click enter, and the entry is
        recorded to the event&apos;s sheet on the Google Sheet. Then the
        application is ready to scan the next guest.
      </p>
      <p>
        The project use React as the frontend framework, Redux as the state
        management, hosted at Firebase Hosting. Google Cloud Function as the
        FaaS backend for authentication and calling Google Sheet API. One cool
        thing is the project needs zero maintenance yayy.
      </p>
    </div>
  );
}
