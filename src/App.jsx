
import useCharacters from './hooks/useCharacters';
import './styles/App.scss';
import Head from './components/layout/Header';
import Search from './components/Filters/Search';
import Gallery from './components/Gallery/Gallery';
import Card from './components/Gallery/Card';
import { useState, useEffect } from 'react'; //Hooks
import { Routes, Route } from 'react-router';

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const hpList = useCharacters();

  
const filteredList = hpList
.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()) || item.alternate_names.length > 0 && item.alternate_names[0].toLowerCase().includes(searchName.toLowerCase())
)
.filter(item => item.house === searchHouse || searchHouse === "")

.filter(item => {
  if (searchRole === "student") return item.hogwartsStudent === true;
  if (searchRole === "staff") return item.hogwartsStaff === true;
  if (searchRole === "") return true;
} );

const houses = [... new Set(hpList.flatMap(item => item.house ? item.house : []))];


  return(
    <>
      <Head />
      

      <Routes>
        <Route path="/" index element={ 
          <>
            <Search setSearchName={setSearchName} searchName={searchName} houses={houses} searchHouse={searchHouse} setSearchHouse={setSearchHouse} setSearchRole={setSearchRole} searchRole={searchRole} />
            <Gallery hpList={filteredList} searchName={searchName} /> 
          </>
      }/>

        <Route path="/detail/:id" element={ 
          <Card /> 
      }/>

        <Route path="*" element={ <h1>Ruta no encontrada</h1> }/>
      </Routes>

    </>
  )
}

export default App
