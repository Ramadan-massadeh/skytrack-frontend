import { useState } from "react";

function Flights() {
  const [flights, setFlights] = useState([
    {
      id: 1,
      from: "Toronto",
      to: "London",
      airline: "Air Canada",
      status: "On Time",
    },
    {
      id: 2,
      from: "New York",
      to: "Paris",
      airline: "Air France",
      status: "Delayed",
    },
  ]);

  const [form, setForm] = useState({
    from: "",
    to: "",
    airline: "",
    status: "On Time",
  });

  // CREATE
  const addFlight = (e) => {
    e.preventDefault();

    const newFlight = {
      id: Date.now(),
      ...form,
    };

    setFlights([...flights, newFlight]);
    setForm({ from: "", to: "", airline: "", status: "On Time" });
  };

  // DELETE
  const deleteFlight = (id) => {
    setFlights(flights.filter((flight) => flight.id !== id));
  };

  // UPDATE (toggle status)
  const toggleStatus = (id) => {
    setFlights(
      flights.map((flight) =>
        flight.id === id
          ? {
              ...flight,
              status: flight.status === "On Time" ? "Delayed" : "On Time",
            }
          : flight
      )
    );
  };

  return (
    <div className="page">
      <h2>Flights ✈️</h2>

      {/* CREATE */}
      <form onSubmit={addFlight}>
        <input
          placeholder="From"
          value={form.from}
          onChange={(e) => setForm({ ...form, from: e.target.value })}
        />
        <input
          placeholder="To"
          value={form.to}
          onChange={(e) => setForm({ ...form, to: e.target.value })}
        />
        <input
          placeholder="Airline"
          value={form.airline}
          onChange={(e) => setForm({ ...form, airline: e.target.value })}
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>On Time</option>
          <option>Delayed</option>
        </select>

        <button type="submit">Add Flight</button>
      </form>

      <hr />

      {/* READ */}
      {flights.map((flight) => (
        <div key={flight.id}>
          <h4>
            {flight.from} → {flight.to}
          </h4>
          <p>Airline: {flight.airline}</p>
          <p>Status: {flight.status}</p>

          {/* UPDATE */}
          <button onClick={() => toggleStatus(flight.id)}>
            Toggle Status
          </button>

          {/* DELETE */}
          <button onClick={() => deleteFlight(flight.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Flights;