import {useState, useEffect} from 'react';

function useCharacters () {

    const [charactersList, setCharactersList] = useState([]);

    useEffect(()=>{
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
        setCharactersList(data);
        })
     }, []);

     return charactersList;
}

export default useCharacters