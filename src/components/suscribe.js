import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

export default function(props) {
  const initialData = { name: "", email: "" };

  const [data, setData] = useState(initialData);

  const [loading, setLoading] = useState(false);

  const [verification, setVerification] = useState(false);

  const [code, setCode] = useState("");

  function createTempUser(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/createTempUser",
        JSON.stringify(data)
      )
      .then(response => {
        console.log(response.data);
        setLoading(false);
        setVerification(true);
      })
      .catch(error => console.log(error));
  }

  function verifyUser(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/createTempUser",
        JSON.stringify({ ...data, code })
      )
      .then(response => {
        console.log(response.data);
        setLoading(false);
        setData(initialData);
        setVerification(false);
      })
      .catch(error => console.log(error));
  }

  if (verification === false) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Subscribe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You will receive all emails about eliminations and fun races. If you
            want to stop receiving these emails please send us a message at{" "}
            <b>contact@mxsreminder.com</b> with the subject <b>UNSUBSCRIBE</b>
          </p>
          <Form onSubmit={createTempUser}>
            <Form.Group controlId="name">
              <Form.Label>
                <b>Your Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={data.name}
                onChange={event =>
                  setData({ ...data, name: event.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>
                <b>Your Email</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter a valid email"
                value={data.email}
                onChange={event =>
                  setData({ ...data, email: event.target.value })
                }
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>

            {loading ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              <Button variant="danger" type="submit">
                Done
              </Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Verification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We have sent a <b>verification code</b> to your email address!
          </p>
          <Form onSubmit={verifyUser}>
            <Form.Group controlId="name">
              <Form.Label>
                <b>Verification Code</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your code"
                value={code}
                onChange={event => setCode(event.target.value)}
                required
              />
            </Form.Group>

            {loading ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              <Button variant="danger" type="submit">
                Done
              </Button>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
