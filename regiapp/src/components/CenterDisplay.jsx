const CenterDisplay = ({ text }) => {
  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100 + "%",
      }}
    >
      <p className="h1">{text}</p>
    </div>
  );
};

export default CenterDisplay;
