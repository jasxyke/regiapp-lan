const SelectYear = ({ setYear, year }) => {
  const years = [];
  for (let year = 2015; year <= new Date().getFullYear(); year++) {
    years.push(year + "");
  }

  const yearsOpts = years.map((year, index) => (
    <option key={index} value={year}>
      {year}
    </option>
  ));
  return (
    <div class="mb-3 mt-3">
      <label htmlFor="year" className="form-label">
        Year:
      </label>
      <select
        name="year"
        id="year"
        className="form-select"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      >
        {yearsOpts}
      </select>
    </div>
  );
};

export default SelectYear;
