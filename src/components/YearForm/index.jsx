import "./year-form.css";

import React from "react";

export default function YearForm() {
  return (
    <form className="year-form">
      <label htmlFor="year">Ano</label>
      <div className="year-row">
        <input id="year" type="number" placeholder="2026" required />
        <button>Buscar</button>
      </div>
    </form>
  );
}
