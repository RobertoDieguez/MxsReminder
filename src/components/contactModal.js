import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          We're Sorry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          It seems like the programmer was very lazy to create this contact
          form.{" "}
          <span aria-label="heart" role="img">
            😞
          </span>{" "}
          Please send your massage at <b>contact@mxsreminder.com</b> and we will
          give you a response as soon as possible.{" "}
          <span aria-label="heart" role="img">
            ❤
          </span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
