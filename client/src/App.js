import axios from "axios";
import "./App.css";
import FormNewItem from "./layouts/formNewItem/FormNewItem";
import TableView from "./layouts/tableView/TableView";
import React, { useState, useEffect } from "react";

function App() {
  //   { id: 1, fullName: "name1", phoneNum: "+7 123 456 78 91", note: "note1" },
  //   { id: 2, fullName: "name2", phoneNum: "+7 123 456 78 92", note: "note2" },
  //   { id: 3, fullName: "name3", phoneNum: "+7 123 456 78 93", note: "note3" },
  // ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/contacts").then((res) => {
      const data = [];
      res.data._embedded.contacts.forEach((element) => {
        data.push({
          fullName: element.fullName,
          phoneNum: element.phoneNum,
          note: element.note,
        });
      });
      setData(data);
    });
  }, []);

  const appendContact = (fullName, phoneNum, note) => {
    const length = data.length;
    let countId = 0;
    if (length === 0) {
      countId = 1;
    } else {
      countId = data[length - 1].id + 1;
    }
    const temp = {
      id: countId,
      fullName: fullName,
      phoneNum: phoneNum,
      note: note,
    };
    setData([...data, temp]); // new array
    // console.log(data.length);
  };

  const removeContact = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
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
