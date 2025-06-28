import '../../styles/Gallery.scss'


function ItemGallery ({item}){

    return (
        <li className="list__item">
            <div className="list__container" style={{ backgroundImage:`url(${item.image}), url(src/images/no-image.jpg)` }}>
                 <img className="list__house" src={ item.house === "Gryffindor" ? "src/images/griffindor.png" : item.house === "Slytherin" ? "src/images/slytherin.png" : item.house === "Hufflepuff" ? "src/images/hufflepuff.png" : item.house === "Ravenclaw" ? "src/images/ravenclaw.png" : "src/images/nohouse.png"} />
                 
                <div className="list__info">
                     <h4 className="list__title">{item.alternate_names[0] ? item.alternate_names[0] : item.name}</h4>
                    <p>{item.name}, {item.species}</p>
                </div>
            </div>   
        </li>

    ); 
}

export default ItemGallery