export default function handler(req, res) {
  res.status(200).json({ status: "Verdex API is running" });
}


// src/components/Navbar.js
export default function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
      <h2>Verdex</h2>
      <div>
        <a href="#" style={{ marginRight: "15px" }}>Home</a>
        <a href="#">Docs</a>
      </div>
    </nav>
  );
}
