import { useState } from "react";
import "../styles/Admin.css";

const API_BASE = "http://localhost:8082";

function Admin() {
  const [form, setForm] = useState({
    flightNumber: "",
    airlineId: "",
    originAirportId: "",
    destinationAirportId: "",
    direction: "DEPARTURE",
    status: "SCHEDULED",
    departureTime: "",
    arrivalTime: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitFlight = (e) => {
    e.preventDefault();

    fetch(`${API_BASE}/api/flights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        airlineId: Number(form.airlineId),
        originAirportId: Number(form.originAirportId),
        destinationAirportId: Number(form.destinationAirportId),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add flight");
        }
        return res.json();
      })
      .then(() => {
        alert("Flight added successfully");
        setForm({
          flightNumber: "",
          airlineId: "",
          originAirportId: "",
          destinationAirportId: "",
          direction: "DEPARTURE",
          status: "SCHEDULED",
          departureTime: "",
          arrivalTime: "",
        });
      })
      .catch((err) => {
        alert("Error adding flight");
        console.error(err);
      });
  };

  return (
    <div className="page admin">
      <h2>Admin – Add Flight</h2>

      <form className="admin-form" onSubmit={submitFlight}>
        <input
          name="flightNumber"
          placeholder="Flight Number"
          value={form.flightNumber}
          onChange={handleChange}
        />

        <input
          name="airlineId"
          placeholder="Airline ID"
          value={form.airlineId}
          onChange={handleChange}
        />

        <input
          name="originAirportId"
          placeholder="Origin Airport ID"
          value={form.originAirportId}
          onChange={handleChange}
        />

        <input
          name="destinationAirportId"
          placeholder="Destination Airport ID"
          value={form.destinationAirportId}
          onChange={handleChange}
        />

        <select
          name="direction"
          value={form.direction}
          onChange={handleChange}
        >
          <option value="DEPARTURE">DEPARTURE</option>
          <option value="ARRIVAL">ARRIVAL</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="SCHEDULED">SCHEDULED</option>
          <option value="DELAYED">DELAYED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>

        <input
          type="datetime-local"
          name="departureTime"
          value={form.departureTime}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="arrivalTime"
          value={form.arrivalTime}
          onChange={handleChange}
        />

        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
}

export default Admin;