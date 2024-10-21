import './App.css';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import TableView from './layouts/tableView/TableView';
import React, { useState } from 'react';


function App() {
  const [data, setData] = useState(
    [
      { num: 1, fullName: "name1", phoneNum: "+7 123 456 78 91", note: "note1" },
      { num: 2, fullName: "name2", phoneNum: "+7 123 456 78 92", note: "note2" },
      { num: 3, fullName: "name3", phoneNum: "+7 123 456 78 93", note: "note3" }
    ]
  );

  const appendContact = (fullName, phoneNum, note) => {
    const countId = data.length + 1;
    const temp = {
      num: countId,
      fullName: fullName,
      phoneNum: phoneNum,
      note: note
    };
    setData([...data, temp]) // new array
    // console.log(data.length);
  }

  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>List of contacts</h1>
        </div>
        <div className='card-body'>
          <TableView contacts={data} />
          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div >
  );
}

export default App;
