import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function(props) {
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  function verifyUser(event) {
    event.preventDefault();
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Verification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          We have sent a <b>verification code</b> to <b>{props.email}</b>. This
          code will be avaible only for 5 minutes after you receive it so hurry
          up!
        </p>
        <Form onSubmit={verifyUser}>
          <Form.Group controlId="code">
            <Form.Label>
              <b>Verification Code</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the verification code"
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
