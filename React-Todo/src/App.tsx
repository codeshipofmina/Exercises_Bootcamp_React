import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Aufgabe1_6 from "./components/Aufgabe-1_6";
import Aufgabe1_5 from "./components/Aufgabe-1_5";
import Aufgabe2_2 from "./components/Aufgabe-2_2";
import Aufgabe3_1 from "./components/Aufgabe-3_1";

export type ToDo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  //! das hier funktioniert zwar, ist aber noch nicht zuverlaessig.
  //! Wird später noch erweitert
  const storedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
  const [todos, setTodos] = useState(storedTodos);
  // const [count, setCount] = useState(0)

  console.log("rendering now");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("useEffect läuft jetzt");
  }, [todos]);
  // * zweites argument an useEffect => dependency array
  // * wenn einer der werte darin sich ändert, wird der Effekt ausgeführt

  return (
    <div>
      {/* <marquee>🐈</marquee> */}
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
      {/* <button onClick={()=>{setCount(count+1)}}>{count}</button> */}
      <Counter></Counter>
      <Aufgabe1_6 />
      <Aufgabe1_5 />
      <Aufgabe2_2 />
      <Aufgabe3_1 />
    </div>
  );
}

export default App;
