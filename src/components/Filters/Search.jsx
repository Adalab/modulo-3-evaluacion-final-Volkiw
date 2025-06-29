import '../../styles/Filters.scss'


function Search ({setSearchName, searchName, houses, searchHouse, setSearchHouse, searchRole, setSearchRole}){

    const handleName = (ev) => {
        ev.preventDefault();
        setSearchName(ev.target.value);
    };

    const handleHouse = (ev) => {
        ev.preventDefault();
        setSearchHouse(ev.target.value);
    };

    const handleRole = (ev) => {
        ev.preventDefault();
        setSearchRole(ev.target.value);

    };

    const handleReset = () => {
        setSearchName("");
        setSearchHouse("");
        setSearchRole("");
    };

    return (
     <>
        <form  className="search">
            <input className="search__input" value={searchName} placeholder="Write the name here..." onChange={handleName} />
            
            <select className="search__input"  onChange={handleHouse} value={searchHouse}>
                <option defaultValue value="">Choose the house</option>
                {houses.map((house, index) => 
                    <option key={index} value={house}>{house}</option>
                )}
            </select>

            <select className="search__input" onChange={handleRole} value={searchRole}>
                <option defaultValue value="">Choose the role</option>
                <option defaultValue value="student">Student</option>
                <option defaultValue value="staff">Staff</option>
            </select>

            <button onClick={handleReset}>reset</button>
        </form>

     </>
    );
}

export default Search