import '../../styles/Gallery.scss'
import ItemGallery from './ItemGallery';


function Gallery ({hpList}){

    return (
        <ul className="list">
           { hpList.map(item => 
           <ItemGallery item={item} key={item.id}/>

           )}
            
        </ul>
    ); 
}

export default Gallery