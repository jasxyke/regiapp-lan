import React from "react";
import Button from "./Button";
import { AiFillDelete } from "react-icons/ai";

const RecordRow = ({ record, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{record.id}</td>
      <td>{record.fullname}</td>
      <td>{record.acronym}</td>
      <td>{record.year}</td>
      <td>
        <Button
          text={"Edit"}
          color={"primary"}
          onClick={(e) => onEdit(record)}
        />
      </td>
      <td>
        <AiFillDelete
          style={{ color: "red", cursor: "pointer" }}
          size={28}
          onClick={(e) => onDelete(record.id)}
        />
      </td>
    </tr>
  );
};

export default RecordRow;
