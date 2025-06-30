import '../../styles/Gallery.scss'
import ItemGallery from './ItemGallery';
import NotFound from './NotFound';

import {Link} from 'react-router';


function Gallery ({hpList, searchName}){
    if (hpList.length === 0 && searchName === "") return "";

    return (
        <ul className="list">
           { hpList.length !== 0 ? hpList.map(item => 
                <Link to={"/detail/" + item.id} key={item.id}>
                    <ItemGallery item={item}/>
                </Link>
           ) : <NotFound searchName={searchName} /> }
            
        </ul>
    ); 
}

export default Gallery