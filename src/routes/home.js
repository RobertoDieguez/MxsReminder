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
                MxsReminder is a very small project. We hope that with this
                platform we can make the Mx Simulator community more united to
                schedule elimination races and fun races where you do not need
                to sign up. This is the main feature that differences us from
                mxslobby.com, mxsemf.com and racefactorygaming.com. We have
                another amazing feature and it is that you don't need to create
                an account with a password; You only need to suscribe with your
                email address and you will able to create events and receive all
                notifications from events that our users create. MxsReminder is
                a very small project. We hope that with this platform we can
                make the Mx Simulator community more united to schedule
                elimination races and fun races where you do not need to sign
                up. This is the main feature that differences us from
                mxslobby.com, mxsemf.com and racefactorygaming.com. We have
                another amazing feature and it is that you don't need to create
                an account with a password; You only need to suscribe with your
                email address and you will able to create events and receive all
                notifications from events that our users create jklasjdlkfjsa
                lasjdflkjasdklfjaksldjflkasjdflkasjdlfjasldkjflksajdfkljsdljf
                lasjdlkfjaslkdjflkasjdflkjsdlkfjskdljfklsdjflksjdflkjsdlkfjsdlkjf
                lkasjdlkfjs
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
                  and receive event's reminders into your smartphone. If you
                  want to support us to pay the creator license for deploying
                  the App on the PlayStore and the AppStore please feel free to
                  make a donation with paypal.
                </p>
                <br />
                <Button variant="outline-danger">
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
                  If you're experience an issue, want to report someone or may
                  give any feedback please send us a message at{" "}
                  <b>contact@mxsreminder.com</b> or do it right now with this
                  button!
                </p>
                <Button
                  variant="outline-danger"
                  onClick={() => setShowModal(true)}
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
