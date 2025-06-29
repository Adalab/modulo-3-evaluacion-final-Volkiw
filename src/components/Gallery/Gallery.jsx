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
           ) : 'Noy hay personajes que coincidan con la búsqueda "' +  searchName + '".' }
            
        </ul>
    ); 
}

export default Gallery