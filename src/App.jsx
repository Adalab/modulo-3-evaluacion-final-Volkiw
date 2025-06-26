
import './styles/App.scss';
import Head from './components/layout/Header';
import Search from './components/Filters/Search';
import Gallery from './components/Gallery/Gallery';

// import { useState } from 'react'; //Hooks

function App() {


  return(
    <>
      <Head />
      <Search />
      <Gallery />

    </>
  )
}

export default App
