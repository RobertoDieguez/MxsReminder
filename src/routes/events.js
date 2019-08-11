import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { read } from "../firestore";
import { useState, useEffect } from "react";

export default function() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    async function readData() {
      const response = await read("events");
      setData(response);
      setLoading(false);
    }
    readData();
  }, []);

  return loading ? (
    <Spinner
      animation="border"
      variant="danger"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    />
  ) : (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>EVENT TYPE</th>
          <th>SERVER</th>
          <th>HOUR</th>
          <th>BIKES ALLOWED</th>
          <th>CREATOR</th>
        </tr>
      </thead>
      <tbody>
        {data.map((event, id) => {
          return (
            <tr key={id}>
              <td>{event.type}</td>
              <td>{event.server}</td>
              <td>{`${event.hour} ${event.timezone}`}</td>
              <td>{event.bikes}</td>
              <td>{event.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
