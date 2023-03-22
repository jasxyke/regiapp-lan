import Header from "../components/Header";
import UploadForm from "../forms/UploadForm";

const Upload = () => {
  const title = "ITECH Registrar's office Digitized Uploader";

  return (
    <div>
      <Header title={title} />
      <UploadForm />
    </div>
  );
};

export default Upload;
