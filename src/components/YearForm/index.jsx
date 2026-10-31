import { useState, useEffect, useRef } from "react";
import "./year-form.css";

export default function YearForm({ year, onSearch }) {
  const [text, setText] = useState(year);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(text);
  }
  return (
    <form className="year-form" onSubmit={handleSubmit}>
      <label htmlFor="year">Ano</label>
      <div className="year-row">
        <input
          id="year"
          type="number"
          placeholder="2026"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button disabled={text.length != 4}>Buscar</button>
      </div>
    </form>
  );
}
