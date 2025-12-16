import { useEffect, useState } from "react";
import "../styles/Flights.css";

const API_BASE = "http://localhost:8082";

function Flights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/flights`)
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p>Loading flights...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Flights </h2>

      {flights.length === 0 && <p>No flights available.</p>}

      {flights.map((flight) => (
        <div key={flight.id} className="flight-card">
          <h4>
            {flight.originCode} → {flight.destinationCode}
          </h4>
          <p>Airline: {flight.airlineName}</p>
          <p>Status: {flight.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Flights;