import '../../styles/Gallery.scss'


function ItemGallery ({item}){

    return (
        <li className="list__item">
            <div className="list__image" style={{ backgroundImage:`url(${item.image}), url(https://placehold.co/230x300/343434/fff?text=guingardiumleviosa)` }}>
                <div className="list__info">
                     <h4 className="list__title">{item.alternate_names[0] ? item.alternate_names[0] : item.name}</h4>
                    <p>{item.name}, {item.species}</p>
                </div>
            </div>   
        </li>

    ); 
}

export default ItemGallery