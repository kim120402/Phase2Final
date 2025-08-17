export default function Header({ title }) {
  return (
    <header style={{
      textAlign: "center",
      padding: "20px 0",
      backgroundColor: "#f8f9fa",  // very light grey
      color: "#34495e",            // soft text color
      fontSize: "2rem",
      fontWeight: "bold",
      borderBottom: "1px solid #dcdcdc"
    }}>
      {title}
    </header>
  );
}