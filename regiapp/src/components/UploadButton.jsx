const UploadButton = ({ setDocuments, documents }) => {
  return (
    <div className="mb-3 mt-3">
      <label htmlFor="documents" className="form-label">
        Upload files:
      </label>
      <br />
      <input
        type="file"
        name="documents"
        id="documents"
        accept="application/pdf"
        onChange={(e) => setDocuments(e.target.files)}
        multiple
        required
      />
    </div>
  );
};

export default UploadButton;
