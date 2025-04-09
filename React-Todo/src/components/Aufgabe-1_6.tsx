import "../App.css";
import { useState } from "react";

function App() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputLastNameValue, setInputLastNameValue] = useState("");
  const [inputEmailValue, setEmailValue] = useState("");

  return (
    <main>
      <h4>Aufgabe 1_6</h4>
      <form>
        <input
          type="text"
          value={inputNameValue}
          onChange={(event) => setInputNameValue(event.target.value)}
        />
        <input
          type="text"
          value={inputLastNameValue}
          onChange={(event) => setInputLastNameValue(event.target.value)}
        />
        <input
          type="text"
          value={inputEmailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        />
      </form>
      <p>Vorname: {inputNameValue}</p>
      <p>Nachname: {inputLastNameValue}</p>
      <p>Email: {inputEmailValue}</p>
    </main>
  );
}
export default App;
