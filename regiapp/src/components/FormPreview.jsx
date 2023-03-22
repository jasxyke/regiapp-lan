import { useContext } from "react";
import { CoursesContext } from "../App";

const FormPreview = ({ year, course, documents }) => {
  const courses = useContext(CoursesContext);
  const filePreviews = [];
  var i = 0;
  for (const file of documents) {
    filePreviews.push(
      <li key={i} className="list-group-item">
        {file.name}
      </li>
    );
    i++;
  }

  return (
    <div className="mt-4">
      <p className="h4">Selected files: </p>
      <p className="h5">
        <strong>Year: </strong>
        {year}
      </p>
      <p className="h5">
        <strong>Course: </strong>
        {courses.find((courseObj) => courseObj.id == course).name}
      </p>
      <ol className="list-group list-group-numbered">{filePreviews}</ol>
    </div>
  );
};

export default FormPreview;
