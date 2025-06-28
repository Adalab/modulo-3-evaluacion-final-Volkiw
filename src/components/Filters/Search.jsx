import '../../styles/Filters.scss'


function Search ({setSearchName, searchName, houses, searchHouse, setSearchHouse}){

    const handleName = (ev) => {
        ev.preventDefault();
        setSearchName(ev.target.value);
    };

    const handleHouse = (ev) => {
        ev.preventDefault();
        setSearchHouse(ev.target.value);
    };

    return (
     <>
        <form  className="search">
            <input className="search__input" value={searchName} placeholder="Introduce el nombre aquí" onChange={handleName} />
            
            <select className="search__input" id="houses" onChange={handleHouse} value={searchHouse}>
                <option defaultValue value="">Elige la casa</option>
                {houses.map((house, index) => 
                    <option key={index} value={house}>{house}</option>
                )}
            </select>
        </form>

     </>
    );
}

export default Search