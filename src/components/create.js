import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useState } from "react";

export default function(props) {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    server: "",
    track: "",
    tracklink: "",
    hour: "21:00",
    timezone: "EST",
    type: "Elimination",
    bikes: "All bikes",
    description: "",
    code: ""
  };

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [invalidEvent, setInvalidEvent] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [verification, setVerification] = useState(false);
  const [verified, setVerified] = useState(false);

  function createTempEvent(event) {
    event.preventDefault();
    setInvalidEvent(false);
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/createTempEvent",
        JSON.stringify(data)
      )
      .then(response => {
        console.log(response.data);
        if (response.data === "You already have created an event today") {
          setInvalidEvent(true);
        } else {
          setVerification(true);
        }
        setLoading(false);
      })
      .catch(error => console.log(error));
  }

  function verifyEvent(event) {
    event.preventDefault();
    setInvalidCode(false);
    setLoading(true);
    axios
      .post(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/verifyEvent",
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
            Create Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createTempEvent}>
            <Form.Group controlId="first-name">
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

            <Form.Group controlId="last-name">
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
                {invalidEvent
                  ? "Oops! You have already created an event today"
                  : null}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="server">
              <Form.Label>
                <b>Your Server</b>
              </Form.Label>
              <Form.Control
                type="text"
                value={data.server}
                onChange={event =>
                  setData({ ...data, server: event.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="server">
              <Form.Label>
                <b>Track Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                value={data.track}
                onChange={event =>
                  setData({ ...data, track: event.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="server">
              <Form.Label>
                <b>Track Link</b>
              </Form.Label>
              <Form.Control
                type="text"
                value={data.tracklink}
                onChange={event =>
                  setData({ ...data, tracklink: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <b>Hour:</b>
              </Form.Label>
              <input
                type="time"
                id="hour"
                name="hour"
                value={data.hour}
                onChange={event =>
                  setData({ ...data, hour: event.target.value })
                }
                required
                style={{ marginLeft: "10px" }}
              />
              <select
                name="timezone"
                style={{ marginLeft: "10px" }}
                value={data.timezone}
                onChange={event =>
                  setData({ ...data, timezone: event.target.value })
                }
                required
              >
                <option value="EST">EST</option>
                <option value="PST">PST</option>
                <option value="CST">CST</option>
              </select>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <b>Type:</b>
              </Form.Label>
              <select
                name="type"
                style={{ marginLeft: "10px" }}
                value={data.type}
                onChange={event =>
                  setData({ ...data, type: event.target.value })
                }
                required
              >
                <option value="Elimination">Elimination</option>
                <option value="Fun Race">Fun Race</option>
              </select>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <b>Bikes:</b>
              </Form.Label>
              <select
                name="bikes"
                style={{ marginLeft: "10px" }}
                value={data.bikes}
                onChange={event =>
                  setData({ ...data, bikes: event.target.value })
                }
                required
              >
                <option value="All Bikes">All Bikes</option>
                <option value="125's Only">125's Only</option>
                <option value="250's Only">250's Only</option>
                <option value="450's Only">450's Only</option>
              </select>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>
                <b>Description (Not required)</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={data.description}
                onChange={event =>
                  setData({ ...data, description: event.target.value })
                }
              />
            </Form.Group>

            {loading ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              <Button
                variant="danger"
                type="submit"
                style={{ fontFamily: "Viga" }}
              >
                Create
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
  } else {
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
            <Form onSubmit={verifyEvent}>
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
              Thank you very much for creating this event! We have sent the
              reminder to everyone!
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
