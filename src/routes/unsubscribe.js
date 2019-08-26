import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function() {
  const [email, setEmail] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/unsubscribe",
        JSON.stringify(email)
      )
      .then(response => {
        console.log(response.data);
        if (response.data === "Email deleted") {
          setLoading(false);
          setDone(true);
        }
      })
      .catch(error => console.log(error));
  }

  function UnsubscribeForm() {
    return (
      <Form onSubmit={handleSubmit} style={{ align: "center" }}>
        <Form.Group controlId="unsubscribe">
          <Form.Label style={{ color: "white" }}>Email address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Enter your email"
            value={email.email}
            onChange={e => setEmail({ email: e.target.value })}
          />
          <Form.Text className="text-white">
            We will stop sending you emails.
          </Form.Text>
        </Form.Group>
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Button variant="danger" type="submit" style={{ fontFamily: "Viga" }}>
            Unsubscribe
          </Button>
        )}
      </Form>
    );
  }

  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col></Col>
        <Col xs={10}>
          {" "}
          {done ? (
            <h1 align="center" style={{ color: "white" }}>
              It's done. You won't receive emails from us anymore.
            </h1>
          ) : (
            <UnsubscribeForm />
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
