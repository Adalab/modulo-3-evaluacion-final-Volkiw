
import './styles/App.scss';
import Head from './components/layout/Header';
import Search from './components/Filters/Search';
import Gallery from './components/Gallery/Gallery';
import { useState, useEffect } from 'react'; //Hooks

function App() {
  const [hpList, setHpList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("");



  useEffect(()=>{
      fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
        setHpList(data);
      })
  }, []);
  
const filteredList = hpList.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase())).filter(item => item.house === searchHouse || searchHouse === "");

const houses = [... new Set(hpList.flatMap(item => item.house ? item.house : []))];


  return(
    <>
      <Head />
      <Search setSearchName={setSearchName} searchName={searchName} houses={houses} searchHouse={searchHouse} setSearchHouse={setSearchHouse} />
      <Gallery hpList={filteredList} />

    </>
  )
}

export default App
