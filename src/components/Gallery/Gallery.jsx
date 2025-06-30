import '../../styles/Gallery.scss'
import ItemGallery from './ItemGallery';
import {Link} from 'react-router';


function Gallery ({hpList, searchName}){
    if (hpList.length === 0 && searchName === "") return "";

    return (
        <ul className="list">
           { hpList.length !== 0 ? hpList.map(item => 
                <Link to={"/detail/" + item.id} key={item.id}>
                    <ItemGallery item={item}/>
                </Link>
           ) : 'There are no characters that match the search "' +  searchName + '".' }
            
        </ul>
    ); 
}

export default Gallery