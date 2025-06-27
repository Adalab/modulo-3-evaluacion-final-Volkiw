import '../../styles/Filters.scss'


function Search ({setSearchName, searchName, houses, searchHouse, setSearchHouse}){

    const handleName = (ev) => {
        setSearchName(ev.target.value);
    };

    const handleHouse = (ev) => {
        setSearchHouse(ev.target.value);
    };

    return (
     <>
     <section className="search">

        <input className="search__input" value={searchName} placeholder="Introduce el nombre aquí" onChange={handleName} />
        
        <select className="search__input" id="houses" onChange={handleHouse} value={searchHouse}>
            <option disabled selected value="">Elige la casa</option>
            {houses.map((house, index) => 
                <option key={index} value={house}>{house}</option>
            )}
        </select>

     </section>
     </>
    );
}

export default Search