import { useContext } from "react";
import { CoursesContext } from "../App";

const SelectCourses = ({ setCourse, course }) => {
  const courses = useContext(CoursesContext);
  const coursesOpts = courses.map((course) => (
    <option key={course.id} value={course.id}>
      {course.name}
    </option>
  ));
  return (
    <div className="mb-3 mt-3">
      <label htmlFor="course" className="form-label">
        Course:
      </label>
      <select
        name="course_id"
        id="course"
        className="form-select"
        required
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        {coursesOpts}
      </select>
    </div>
  );
};

export default SelectCourses;
