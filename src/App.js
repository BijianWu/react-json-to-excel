import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ExportToExcel } from './ExportToExcel';

function App() {
  // const [data, setData] = useState([]);
  const fileName = "myfile"; // here enter filename for your excel file
  // useEffect(() => {
  //     const fetchData = async () => {
  //         axios.get('https://jsonplaceholder.typicode.com/posts')
  //         .then(response => setData(response.data));
  //     }
  //     fetchData();
  // });
  // console.log(data);

  return (
    <div className="App">
      <ExportToExcel   fileName={fileName} />
    </div>
  );
}

export default App;
