import { useState } from "react";
import "../App.css";

function DayNightSwitch() {
  const [isDay, setIsDay] = useState(true);
  // wir starten standardmäßig im Daymode, deswegen schreiben wir isDay mit dem wert "true"
  const changeDayNight = () => {
    setIsDay((prev) => !prev);
    // const changeDayNight ist die Togglefunktion.
    // der befehl "prev" verhindert potenzielle Fehler bei asynchronen Updates
    //Warum wird prev in setIsDay((prev) => !prev) verwendet?
    //→ Antwort: Um sicherzustellen, dass wir den aktuellsten State umkehren
    // (falls Updates asynchron wären).
  };
  return (
    <div className={`${isDay ? "day" : "night"} output`}>
      {/* Wenn isDay wahr ist, wird die Klasse day zugewiesen, sonst night. */}
      <h4>Aufgabe 2_2</h4>
      <h3 className={isDay ? "day" : "night"}>{isDay ? "Day" : "Night"}</h3>
      {/* Ändert den Text zwischen "Day" und "Night". */}
      <button onClick={changeDayNight}>
        Change to {isDay ? "Night" : "Day"}
      </button>
    </div>
  );
}

export default DayNightSwitch;
