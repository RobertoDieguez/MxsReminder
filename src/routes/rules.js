import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function() {
  return (
    <div>
      <br />
      <br />
      <Jumbotron>
        <h1>Rules and Terms</h1>
        <p align="justify">
          MxsReminder has some basic rules and terms that we need to follow in
          order to have a great experience without any problems. If you see that
          someone violates one of these rules you can report them at{" "}
          <b>contact@mxsreminder.com</b> with the Subject <b>REPORT</b>.
          <br />
          <br />
        </p>
        <ul>
          <li>
            MxsReminder is not responsible if the creator of an event gives the
            wrong server and hour information.
          </li>
          <li>
            MxsReminder is not responsible if the creator of an event does not
            show up to host the event. This is a very bad fault and you can
            report the creator of the event at <b>contact@mxsreminder.com</b>{" "}
            with the Subject <b>REPORT</b>.
          </li>
          <li>
            Remember, we're sending notifications about all events to everyone.
            If you create a fake event we will ban you immediately.
          </li>
          <li>
            Do not spam <b>contact@mxsreminder.com</b>. We will answer you in
            the next 48 hours so be patience.
          </li>
          <li>
            When creating an event DO NOT use foul language in the description.
            You can report this at <b>contact@mxsreminder.com</b> with the
            Subject <b>REPORT</b>.{" "}
          </li>
          <li>
            Always be nice to everyone! We don't like toxic people.{" "}
            <span aria-label="heart" role="img">
              💩
            </span>
          </li>
        </ul>
      </Jumbotron>
    </div>
  );
}
