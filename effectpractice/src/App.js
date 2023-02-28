import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header";

function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    // window.alert("useeffect");
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
    }
    getData();

    document.title = `(${state}) Employees online`;
  }, [state]);

  return (
    <div>
      <Header />
      {/* {console.log("jsx")} */}
      <button onClick={() => setState(state + 2)}>Click me{state}</button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
