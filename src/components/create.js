import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function(props) {
  const initialData = {
    name: "",
    email: "",
    server: "",
    track: "",
    tracklink: "",
    hour: "21:00",
    timezone: "EST",
    type: "Elimination",
    bikes: "All bikes",
    description: ""
  };

  const [data, setData] = useState(initialData);

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
        <Form
          onSubmit={event => {
            event.preventDefault();
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

          <Form.Group controlId="server">
            <Form.Label>
              <b>Your Server</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a valid Mx Simulator Server"
              value={data.server}
              onChange={event =>
                setData({ ...data, server: event.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group controlId="server">
            <Form.Label>
              <b>Track</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the full name of the track"
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
              placeholder="Link to download the track."
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
              onChange={event => setData({ ...data, hour: event.target.value })}
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
              onChange={event => setData({ ...data, type: event.target.value })}
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

          <Button variant="danger" type="submit">
            Create
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
