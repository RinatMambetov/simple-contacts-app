import './App.css';
import TableView from './layouts/tableView/TableView';

const data = [
  { num: 1, fullName: "name1", phoneNum: "+7 123 456 78 91", note: "note1" },
  { num: 2, fullName: "name2", phoneNum: "+7 123 456 78 92", note: "note2" },
  { num: 3, fullName: "name3", phoneNum: "+7 123 456 78 93", note: "note3" }
]

const appendContact = () => {
  const temp = { num: 1, fullName: "name1", phoneNum: "+7 123 456 78 91", note: "note1" };
  data.push(temp);
  console.log(data.length);
}

function App() {
  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>List of contacts</h1>
        </div>
        <div className='card-body'>
          <TableView contacts={data} />
          <button className='btn btn-primary' onClick={appendContact}>Add contact</button>
        </div>
      </div>
    </div >
  );
}

export default App;
