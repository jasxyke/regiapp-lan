import Button from "./Button";

const GenerateExcel = () => {
  return (
    <div>
      <form action="http://192.168.254.108:500/api/excel-masterlist">
        <br />
        <Button text={"Generate Summary"} color={"success"} />
      </form>
    </div>
  );
};

export default GenerateExcel;
