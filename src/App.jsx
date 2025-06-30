
import useCharacters from './hooks/useCharacters';
import './styles/App.scss';
import Head from './components/layout/Header';
import Search from './components/Filters/Search';
import Gallery from './components/Gallery/Gallery';
import Card from './components/Gallery/Card';
import { useState } from 'react'; //Hooks
import { Routes, Route } from 'react-router';
import notFound from './images/not-found.png';


function App() {
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const hpList = useCharacters();

  
const filteredList = hpList
.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()) || item.alternate_names.length > 0 && item.alternate_names[0].toLowerCase().includes(searchName.toLowerCase())) // filtra tanto por nombre como por el primer alternate_names porque quería que el título del personaje fuese el nombre alternativo (si existía) pero que pueda buscar por ambos (es decir, puedes buscar Hermy o Hermione)

.filter(item => item.house === searchHouse || searchHouse === "")

.filter(item => {
  if (searchRole === "student") return item.hogwartsStudent === true;
  if (searchRole === "staff") return item.hogwartsStaff === true;
  if (searchRole === "") return true;
} );

const houses = [...new Set(hpList
  .map(item=> item.house)
  .filter(house=>house)
)];


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

        <Route path="*" element={  <img className="img--404" src={notFound} /> }/>
      </Routes>

    </>
  )
}

export default App
