import { useEffect, useState } from "react";
import "../styles/Airports.css";

const API_BASE = "http://localhost:8082";

function Airports() {
  const [airports, setAirports] = useState([]);

  const [form, setForm] = useState({
    name: "",
    code: "",
    city: "",
    country: "",
  });

  // READ (from backend)
  useEffect(() => {
    fetch(`${API_BASE}/api/airports`)
      .then((res) => res.json())
      .then((data) => setAirports(data))
      .catch((err) => console.error(err));
  }, []);

  // CREATE (to backend)
  const addAirport = (e) => {
    e.preventDefault();

    fetch(`${API_BASE}/api/airports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newAirport) => {
        setAirports([...airports, newAirport]);
        setForm({ name: "", code: "", city: "", country: "" });
      })
      .catch((err) => console.error(err));
  };

  // DELETE (from backend)
  const deleteAirport = (id) => {
    fetch(`${API_BASE}/api/airports/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setAirports(airports.filter((a) => a.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="page">
      <div className="airports">
        <h2>Airports </h2>

        {/* CREATE */}
        <form className="airport-form" onSubmit={addAirport}>
          <input
            placeholder="Airport name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            placeholder="Code (e.g. YYZ)"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            required
          />
          <input
            placeholder="City"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required
          />
          <input
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            required
          />
          <button type="submit">Add Airport</button>
        </form>

        {/* READ */}
        {airports.map((airport) => (
          <div key={airport.id} className="airport-card">
            <h3>{airport.name}</h3>
            <p>Code: {airport.code}</p>
            <p>City: {airport.city}</p>
            <p>Country: {airport.country}</p>
            <button onClick={() => deleteAirport(airport.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Airports;