import '../../styles/Gallery.scss';
import gryffindor from '../../images/griffindor.png';
import slytherin from '../../images/slytherin.png';
import ravenclaw from '../../images/ravenclaw.png';
import hufflepuff from '../../images/hufflepuff.png';
import noHouse from '../../images/nohouse.png';
import noImage from '../../images/no-image.jpg';






function ItemGallery ({item}){

    return (
        <li className="list__item">
            <div className="list__container" style={{ backgroundImage:`url(${item.image}), url(${noImage})` }}>
                 <img className="list__house" src={ item.house === "Gryffindor" ? gryffindor : item.house === "Slytherin" ? slytherin : item.house === "Hufflepuff" ? hufflepuff : item.house === "Ravenclaw" ? ravenclaw : noHouse} />
                 
                <div className="list__info">
                     <h4 className="list__title">{item.alternate_names[0] ? item.alternate_names[0] : item.name}</h4>
                    <p>{item.name}, {item.species}</p>
                </div>
            </div>   
        </li>

    ); 
}

export default ItemGallery