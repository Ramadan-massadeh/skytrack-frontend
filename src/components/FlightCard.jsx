function FlightCard({ flight, onToggleStatus, onDelete }) {
  return (
    <div className="flight-card">
      <h4>
        {flight.from} → {flight.to}
      </h4>
      <p>Airline: {flight.airline}</p>
      <p>Status: {flight.status}</p>

      <button onClick={() => onToggleStatus(flight.id)}>
        Toggle Status
      </button>

      <button onClick={() => onDelete(flight.id)}>
        Delete
      </button>
    </div>
  );
}

export default FlightCard;