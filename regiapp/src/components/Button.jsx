const Button = ({ text, color, loading = false, onClick = () => {} }) => {
  return (
    <button
      className={`btn btn-${color}`}
      disabled={loading}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
};

export default Button;
