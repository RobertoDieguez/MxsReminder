import React from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const today = new Date();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://us-central1-mxsreminder-42916.cloudfunctions.net/readEvents"
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    getData();
  }, []);

  return loading ? (
    <Spinner
      animation="border"
      variant="danger"
      style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
    />
  ) : (
    <div>
      <Alert variant="secondary">
        This events are from today{" "}
        <b>
          {today.getMonth() +
            1 +
            "/" +
            today.getDate() +
            "/" +
            today.getFullYear()}
        </b>
        {". "}
        We reset our events table every day at 00:00 AM EST
      </Alert>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>EVENT TYPE</th>
            <th>SERVER</th>
            <th>TRACK</th>
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
                <td>
                  {event.track}{" "}
                  {event.tracklink ? (
                    <div style={{ display: "inline-block", float: "right" }}>
                      <Button
                        variant="danger"
                        href={event.tracklink}
                        style={{ fontFamily: "Viga" }}
                      >
                        Download
                      </Button>
                    </div>
                  ) : null}
                </td>
                <td>{`${event.hour} ${event.timezone}`}</td>
                <td>{event.bikes}</td>
                <td>{event.firstName + " " + event.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
