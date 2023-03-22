import React, { useState } from "react";
import SelectYear from "../components/SelectYear";
import SelectCourses from "../components/SelectCourses";
import UploadButton from "../components/UploadButton";
import Button from "../components/Button";
import FormPreview from "../components/FormPreview";
import axiosClient from "../axios";
import { computeProgress } from "../helpers/UploadProgress";
import ProgressBar from "../components/ProgressBar";

const UploadForm = () => {
  const [year, setYear] = useState(2015);
  const [course, setCourse] = useState(1);
  const [documents, setDocuments] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setLoading(false);
    setProgress(0);
    setYear(2015);
    setCourse(1);
    setDocuments([]);
    document.querySelector("#documents").value = null;
  };

  const submitDocuments = (e) => {
    setLoading(true);
    e.preventDefault();
    if (documents.length === 0) {
      alert("Please upload atleast 1 file.");
      return setLoading(false);
    }
    const formData = new FormData(document.querySelector("#upload-form"));
    axiosClient
      .post("/add-document", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress(progressEvent) {
          setProgress(computeProgress(progressEvent));
        },
      })
      .then((res) => {
        clearForm();
        console.log(res.data);
        alert(res.data);
      })
      .catch((error) => {
        clearForm();
        alert(error.response?.data?.message);
        console.log("error!");
      });
  };
  return (
    <form id="upload-form" onSubmit={submitDocuments}>
      <SelectYear setYear={setYear} year={year} />
      <SelectCourses setCourse={setCourse} course={course} />
      <UploadButton setDocuments={setDocuments} documents={documents} />
      <Button text={"Submit"} color="primary" loading={loading} />
      {progress > 0 && <ProgressBar progress={progress} />}
      {documents.length > 0 && (
        <FormPreview year={year} course={course} documents={documents} />
      )}
    </form>
  );
};

export default UploadForm;
