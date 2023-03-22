import RecordRow from "./RecordRow";

const MasterlistTable = ({ masterlist, onEdit, onDelete }) => {
  const rows = masterlist.map((record) => (
    <RecordRow
      key={record.id}
      record={record}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fullname</th>
          <th>Course</th>
          <th>Year</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default MasterlistTable;
