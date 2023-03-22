const ProgressBar = ({ progress }) => {
  return (
    <div class="progress mt-3 mb-3">
      <div class="progress-bar" style={{ width: progress + "%" }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
