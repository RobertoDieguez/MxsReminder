import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../components/jumbotron";

export default function() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron
            title="How It Works!"
            text="MxsReminder is a very small project. We hope that with this platform we can make the Mx Simulator community
             more united to schedule elimination races and fun races where you do not need to sign up. This is the main feature that 
             differences us from mxslobby.com, mxsemf.com and racefactorygaming.com. 
             We have another amazing feature and it is that you don't need to create an account with a password; 
             You only need to suscribe
             with your email address and you will able to create events and receive all notifications from events that our users create.
             
             "
          />
        </Col>
        <Col>
          <Row>
            <Jumbotron
              title="Support Us"
              text="This is the beginning of a bigger project. We are working on an App for Android and IOS
              to make it easier to create events and receive event's reminders into your smartphone. If you want to support us to pay the
              creator license for deploying the App on the PlayStore and the AppStore please feel free to make a donation at"
              bold="mxsreminder@paypal.com"
            />
          </Row>
          <Row>
            <Jumbotron
              title="Contact Us"
              text="If you're experience an issue or want to report an user please give us a message with your
              problem at"
              bold="contact@mxsreminder.com"
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
