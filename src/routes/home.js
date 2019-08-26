import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ContactForm from "../components/contactModal";

export default function() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ height: "100%", display: "flex" }}>
            <Jumbotron>
              <h1>How It Works!</h1>
              <p align="justify">
                <br />
                MxsReminder was born because of the poor communication that the
                Mx Simulator community has. We know that we have amazing
                platforms like Racefactory, EMF, and Mxslobby to create formal
                races, championships and etc. But, what happened with the fun
                events? You know that it is very common to see people scheduling
                eliminations and fun races on the Mx Simulator forum, discord
                servers, Instagram, etc. With MxsReminder we have a platform
                where we can schedule eliminations and fun races but, here is
                the magic, with MxsReminder you'll receive via email
                notifications about those daily fun events and you DO NOT need
                to sign up! Very cool, Isn't it?.
              </p>
              <br />
              <ul>
                <li>
                  Just subscribe with your email address to start receiving
                  notifications about all fun events.{" "}
                </li>
                <br />
                <li>
                  To create an event you only need to fill the Create Event form
                  with the requested information.
                </li>
              </ul>
              <br />
              <p align="justify">
                We will add more features in the future but, right now our goal
                is to make it easier to schedule daily fun events and tell
                everyone about them because we know how boring eliminations and
                fun races are when there are not enough people. Enjoy it!
              </p>
            </Jumbotron>
          </div>
        </Col>
        <Col>
          <Row>
            <div style={{ height: "100%", display: "flex" }}>
              <Jumbotron>
                <h1>Support Us</h1>
                <p align="justify">
                  <br />
                  This is the beginning of a bigger project. We are working on
                  an App for Android and IOS to make it easier to create events
                  and receive notifications with your smartphone. If you want to
                  support MxsReminder to deploy our App on the PlayStore and the
                  AppStore and finance a better server hosting to have our
                  official Mx Simulator server you can give us a humble donation
                  with Paypal. We'll appreciate it very much.
                </p>
                <br />
                <Button variant="outline-danger" style={{ fontFamily: "Viga" }}>
                  Donate with Paypal{" "}
                  <span aria-label="heart" role="img">
                    ❤
                  </span>
                </Button>
              </Jumbotron>
            </div>
          </Row>
          <Row>
            <div style={{ height: "100%", display: "flex" }}>
              <Jumbotron>
                <h1>Contact Us</h1>
                <p align="justify">
                  <br />
                  If you're experiencing an issue, want to report someone or may
                  give any feedback please send us a message at{" "}
                  <b>contact@mxsreminder.com</b> or do it right now with this
                  button!
                </p>
                <Button
                  variant="outline-danger"
                  onClick={() => setShowModal(true)}
                  style={{ fontFamily: "Viga" }}
                >
                  Contact
                </Button>
              </Jumbotron>
              <ContactForm
                show={showModal}
                onHide={() => setShowModal(false)}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
