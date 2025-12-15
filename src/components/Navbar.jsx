import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#0b1d3a" }}>
      <span style={{ color: "white", fontWeight: "bold", marginRight: "20px" }}>
        SkyTrack
      </span>

      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/flights" style={{ color: "white", marginRight: "15px" }}>Flights</Link>
      <Link to="/airports" style={{ color: "white", marginRight: "15px" }}>Airports</Link>
      <Link to="/admin" style={{ color: "white" }}>Admin</Link>
    </nav>
  );
}

export default Navbar;