import "./month-filter.css";

import months from "../../data/months";

export default function MonthFilter({ month, onChange }) {
  return (
    <div className="month-filter">
      <label htmlFor="month">Mês</label>
      <select
        name="month"
        id="month"
        value={month}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Todos</option>

        {months.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
