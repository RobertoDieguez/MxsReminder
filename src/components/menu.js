import React from "react";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Create from "./create";
import Suscribe from "./suscribe";

export default function() {
  const [showCreate, setShowCreate] = useState(false);
  const [showSuscribe, setShowSuscribe] = useState(false);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={require("../mxsreminderlogo.png")}
              alt="ITSPRO"
              style={{ width: "100px", height: "55px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" style={{ color: "white", padding: "10px" }}>
              Home
            </Link>

            <Link to="/events" style={{ color: "white", padding: "10px" }}>
              Events
            </Link>

            <Link to="/rules" style={{ color: "white", padding: "10px" }}>
              Rules
            </Link>
          </Nav>
          <Button
            variant="danger"
            className="mr-sm-2"
            onClick={() => setShowCreate(true)}
          >
            Create Event
          </Button>
          <Button
            variant="outline-danger"
            className="mr-sm-2"
            onClick={() => setShowSuscribe(true)}
          >
            Subscribe
          </Button>
          <Button
            variant="outline-danger"
            className="mr-sm-2"
            href="https://discord.gg/7uHUxuh"
          >
            Discord
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Create show={showCreate} onHide={() => setShowCreate(false)} />
      <Suscribe show={showSuscribe} onHide={() => setShowSuscribe(false)} />
    </div>
  );
}
