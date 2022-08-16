/* import './App.css'; */
import { useState, useEffect } from "react";

function App() {

  const [list, setList] = useState([]);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3001/api/")
    const entries = await data.json()
    setList(entries)
  }

  useEffect(
    () => {
      fetchData()
    }, []
  )

  return (
    <div className="App">
      <ul>
      {
        list.map(item =>(
          <li key={item.id}>Concepto: {item.concepto} - Monto: ${item.monto} - Fecha: {item.fecha} - Tipo: {item.tipo}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
