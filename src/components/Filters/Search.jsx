import '../../styles/Filters.scss'


function Search ({setSearchName, searchName, houses, searchHouse, setSearchHouse, searchRole, setSearchRole}){

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleName = (ev) => {
        setSearchName(ev.target.value);
    };

    const handleHouse = (ev) => {
        setSearchHouse(ev.target.value);
    };

    const handleRole = (ev) => {
        setSearchRole(ev.target.value);

    };

    const handleReset = (ev) => {
        ev.preventDefault();
        setSearchName("");
        setSearchHouse("");
        setSearchRole("");
    };

    return (
     <>
        <form onSubmit={handleSubmit} className="search">
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

            <button type="button" onClick={handleReset}>reset</button>
        </form>

     </>
    );
}

export default Search