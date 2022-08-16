import './App.css';
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

    <tbody>

      <tr>
        <th>Concepto</th>
        <th>Monto</th>
        <th>Fecha</th>
        <th>Tipo</th>
      </tr>

      {
        list.map(item => (

          /*  <li key={item.id}>Concepto: {item.concepto} - Monto: ${item.monto} - Fecha: {item.fecha} - Tipo: {item.tipo}</li> */

          <tr key={item.id}>
            <td>{item.concepto}</td>
            <td>{item.monto}</td>
            <td>{item.fecha}</td>
            <td>{item.tipo}</td>
          </tr>

        ))
      }
    </tbody>

  );
}

export default App;
