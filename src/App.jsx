import holidays from "./data/holidays";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Próximo Feriado</h1>
        <p>Feriados nacioanis do Brasil</p>
      </header>

      <section className="next-holiday">
        <p>O próximo é</p>
        <h2>Finados</h2>
        <p>segunda-feira, 02/11/2026</p>
        <h2 className="countdown">Faltam 5 d, 2 h, 37 min e 22 s</h2>
      </section>

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
