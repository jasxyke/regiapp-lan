import { CoursesContext } from "../App";
import axiosClient from "../axios";
import CenterDisplay from "../components/CenterDisplay";
import Header from "../components/Header";
import MasterlistTable from "../components/MasterlistTable";
import { useContext, useEffect, useState } from "react";
import SelectYear from "../components/SelectYear";
import SelectCourses from "../components/SelectCourses";
import Button from "../components/Button";
import GenerateExcel from "../components/GenerateExcel";
const Masterlist = () => {
  const [masterlist, setMasterlist] = useState([]);
  const [records, setRecords] = useState([]);
  const [course, setCourse] = useState(1);
  const [year, setYear] = useState(2015);

  useEffect(() => {
    axiosClient
      .get("/masterlist")
      .then((res) => {
        setMasterlist(res.data);
        setRecords(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error on getting masterlist!");
      });
  }, []);

  const deleteRecord = async (id) => {
    try {
      let res = await axiosClient.delete(`/masterlist/${id}`);
      console.log(res);
      let recs = masterlist.filter((record) => record.id !== id);
      console.log(recs);
      setRecords(recs);
      setMasterlist(recs);
    } catch (error) {
      console.log(error);
      alert("Error when deleting!!");
    }
  };

  const editRecord = async (record) => {
    try {
      // let res = await axiosClient.put("/masterlist/" + record.id, record);
      // console.log(res.data);
      // alert(res.data);
      alert("wait lang waley muna to hahahahhahahaha");
    } catch (error) {
      console.log(error);
      alert("Error on editing record");
    }
  };

  const groupByYear = (year) => {
    setYear(year);
    console.log(masterlist);
    setRecords(masterlist.filter((record) => record.year == year));
  };

  const groupByCourse = (course) => {
    setCourse(course);
    setRecords(masterlist.filter((record) => record.course_id == course));
  };

  const clearGroupBy = () => {
    setRecords(masterlist);
  };

  return (
    <div>
      <Header title={"Masterlist Table"} />
      <div
        style={{
          width: 100 + "%",
          display: "flex",
          justifyContent: "end",
          columnGap: 20 + "px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <GenerateExcel />
        <div>
          <br />
          <Button text={"Reset"} color={"secondary"} onClick={clearGroupBy} />
        </div>
        <SelectYear setYear={groupByYear} year={year} />
        <SelectCourses setCourse={groupByCourse} course={course} />
      </div>
      <div style={{ height: 50 + "vh", overflow: "scroll" }} className="mt-5">
        {records.length > 0 ? (
          <MasterlistTable
            masterlist={records}
            onDelete={deleteRecord}
            onEdit={editRecord}
          />
        ) : (
          <CenterDisplay text={"No records found"} />
        )}
      </div>
    </div>
  );
};

export default Masterlist;
