import axios from "axios";
import "./App.css";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import TableView from "./layouts/tableView/TableView";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:8080/api/";

  useEffect(() => {
    axios.get(baseUrl + "contacts").then((res) => {
      const data = [];
      res.data._embedded.contacts.forEach((element) => {
        data.push({
          id: element.id,
          fullName: element.fullName,
          phoneNum: element.phoneNum,
          note: element.note,
        });
      });
      setData(data);
    });
  }, []);

  const appendContact = (fullName, phoneNum, note) => {
    const temp = {
      fullName: fullName,
      phoneNum: phoneNum,
      note: note,
    };
    const url = baseUrl + "contacts";
    axios.post(url, temp);
    setData([...data, temp]); // new array
    // console.log(data.length);
  };

  const removeContact = (id) => {
    const url = baseUrl + `contacts/${id}`;
    axios.delete(url);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container m-5">
      <div className="card">
        <div className="card-header">
          <h1>List of contacts</h1>
        </div>
        <div className="card-body">
          <TableView contacts={data} removeContact={removeContact} />
          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
