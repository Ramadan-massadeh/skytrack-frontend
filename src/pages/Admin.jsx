import { useState } from "react";
import "../styles/Admin.css";

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

    console.log("Admin flight demo submit:", form);

    alert(
      "Flight submitted (demo mode).\n\nThis form demonstrates admin input handling."
    );

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
  };

  return (
    <div className="page admin">
      <h2>Admin – Add Flight</h2>

      <form className="admin-form" onSubmit={submitFlight}>
        <input
          name="flightNumber"
          placeholder="Flight Number (AC202)"
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

        <select name="direction" value={form.direction} onChange={handleChange}>
          <option value="DEPARTURE">DEPARTURE</option>
          <option value="ARRIVAL">ARRIVAL</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;