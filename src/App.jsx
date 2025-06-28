
import './styles/App.scss';
import Head from './components/layout/Header';
import Search from './components/Filters/Search';
import Gallery from './components/Gallery/Gallery';
import Card from './components/Gallery/Card';
import { useState, useEffect } from 'react'; //Hooks
import { Routes, Route } from 'react-router';

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
      

      <Routes>
        <Route path="/" index element={ 
          <>
            <Search setSearchName={setSearchName} searchName={searchName} houses={houses} searchHouse={searchHouse} setSearchHouse={setSearchHouse} />
            <Gallery hpList={filteredList} searchName={searchName} /> 
          </>
      }/>

        <Route path="/detail/:id" element={ 
          <Card hpList={hpList} /> 
      }/>

        <Route path="*" element={ <h1>Ruta no encontrada</h1> }/>
      </Routes>

    </>
  )
}

export default App
