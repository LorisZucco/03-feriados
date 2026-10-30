import "./App.css";

// Mocked data
import holidays from "./data/holidays";

// Components imports
import Header from "./components/Header";
import NextHoliday from "./components/NextHoliday";
import HolidayCard from "./components/HolidayCard";
import YearForm from "./components/YearForm";

function App() {
  return (
    <>
      <Header />
      <NextHoliday />
      <section className="filters">
        <YearForm />
      </section>
      <p className="count">X feriados em 2026</p>
      <main className="holiday-list">
        {holidays.map((item) => (
          <HolidayCard
            key={item.date}
            date={item.date}
            name={item.name}
            weekday={item.weekday}
            type={item.type}
          />
        ))}
      </main>
    </>
  );
}

export default App;
