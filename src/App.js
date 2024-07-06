import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SingleUserList from './components/SingleUserList';



function App() {
  const [users, setUsers] = useState([])

  const FectData = async () => {
    const reponse = await axios.get("http://localhost:3005/users")
    setUsers(reponse.data);


    console.log(reponse.data)

  }

  useEffect(() => {
    // axios.get("http://localhost:3005/users").then((res)=>console.log(res.data))
    FectData()
  }, [])

  return (
    <div className="App">
      <Header />
      <SingleUserList users={users} />
    </div>
  );
}

export default App;
