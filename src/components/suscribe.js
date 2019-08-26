import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const initialData = { firstName: "", lastName: "", email: "", code: "" };

  const [data, setData] = useState(initialData);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verification, setVerification] = useState(false);
  const [verified, setVerified] = useState(false);

  function createTempUser(event) {
    event.preventDefault();
    setInvalidEmail(false);
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/createTempUser",
        JSON.stringify(data)
      )
      .then(response => {
        console.log(response.data);
        if (response.data === "This email already exists") {
          setInvalidEmail(true);
        } else {
          setVerification(true);
        }
        setLoading(false);
      })
      .catch(error => console.log(error));
  }

  function verifyUser(event) {
    event.preventDefault();
    setInvalidCode(false);
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/verifyCode",
        JSON.stringify(data)
      )
      .then(response => {
        console.log(response.data);
        if (response.data === "Code verified!") {
          setVerified(true);
          setData(initialData);
        } else {
          setInvalidCode(true);
        }
        setLoading(false);
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
            want to stop receiving these emails please unsubscribe{" "}
            <Link
              to="/unsubscribe"
              style={{ color: "red" }}
              onClick={props.onHide}
            >
              here
            </Link>
            .
          </p>
          <Form onSubmit={createTempUser}>
            <Form.Group controlId="name">
              <Form.Label>
                <b>First Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                value={data.firstName}
                onChange={event =>
                  setData({ ...data, firstName: event.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>
                <b>Last Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                value={data.lastName}
                onChange={event =>
                  setData({ ...data, lastName: event.target.value })
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
                value={data.email}
                onChange={event =>
                  setData({ ...data, email: event.target.value })
                }
                required
              />
              <Form.Text className="text-danger">
                {invalidEmail ? "Oops! This email was already used!" : null}
              </Form.Text>
            </Form.Group>

            {loading ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              <Button
                variant="danger"
                type="submit"
                style={{ fontFamily: "Viga" }}
              >
                Done
              </Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            variant="danger"
            style={{ fontFamily: "Viga" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (verification === true) {
    if (verified === false) {
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
                  value={data.code}
                  onChange={event =>
                    setData({ ...data, code: event.target.value })
                  }
                  required
                />
                <Form.Text className="text-danger">
                  {invalidCode ? "Oops! This code is not correct!" : null}
                </Form.Text>
              </Form.Group>

              {loading ? (
                <Spinner animation="border" variant="danger" />
              ) : (
                <Button
                  variant="danger"
                  type="submit"
                  style={{ fontFamily: "Viga" }}
                >
                  Done
                </Button>
              )}
            </Form>
          </Modal.Body>
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
          <Modal.Header closeButton />
          <Modal.Body>
            <h3>
              Thank you very much! Now you'll receive notifications about all
              daily events.
            </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={props.onHide}
              variant="danger"
              style={{ fontFamily: "Viga" }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
}
