import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { write } from "../firestore";
import { useState } from "react";

export default function(props) {
  const initialData = { name: "", email: "" };

  const [data, setData] = useState(initialData);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You will receive all emails about eliminations and fun races. If you
          want to stop receiving these emails please send us a message at{" "}
          <b>contact@mxsreminder.com</b> with the subject <b>UNSUBSCRIBE</b>
        </p>
        <Form
          onSubmit={event => {
            event.preventDefault();
            write("users", data);
            setData(initialData);
          }}
        >
          <Form.Group controlId="name">
            <Form.Label>
              <b>Your Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={data.name}
              onChange={event => setData({ ...data, name: event.target.value })}
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

          <Button variant="danger" type="submit">
            Done
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
