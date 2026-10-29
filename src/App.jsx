import "./App.css";

// Mocked data
import holidays from "./data/holidays";

// Components imports
import Header from "./components/Header";
import NextHoliday from "./components/NextHoliday";

function App() {
  return (
    <>
      <Header />
      <NextHoliday />

      <p className="count">X feriados em 2026</p>
      <main className="holiday-list">
        {holidays.map((item) => (
          <article className="holiday-card" key={item.date}>
            <p className="holiday-date">{item.date}</p>

            <div className="holiday-info">
              <h2> {item.name}</h2>
              <p>{item.weekday}</p>
            </div>

            <span className="tag weekend">{item.type}</span>
          </article>
        ))}
      </main>
    </>
  );
}

export default App;
