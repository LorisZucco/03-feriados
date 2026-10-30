import { useState } from "react";

import "./App.css";

/* Components Imports */
import Header from "./components/Header";
import Holidaycard from "./components/HolidayCard";
import MonthFilter from "./components/MonthFilter";
import NextHoliday from "./components/NextHoliday";
import YearForm from "./components/YearForm";

/* Mocked data */
import holidays from "./data/holidays";

function App() {
  const [month, setMonth] = useState("");

  const isVisible = holidays.filter((holiday) => {
    return month == "" || holiday.date.includes(`-${month}-`);
  });

  return (
    <>
      <Header />

      <NextHoliday />

      <section className="filters">
        <YearForm />
        <MonthFilter month={month} onChange={setMonth} />
      </section>

      <p className="count">14 feriados em 2026</p>

      {isVisible.length == 0 ? (
        <p className="empty">Nenhum feriado neste mês.</p>
      ) : (
        <main className="holiday-list">
          {isVisible.map((item) => (
            <Holidaycard
              key={item.date}
              date={item.date}
              name={item.name}
              weekday={item.weekday}
            />
          ))}
        </main>
      )}
    </>
  );
}

export default App;
