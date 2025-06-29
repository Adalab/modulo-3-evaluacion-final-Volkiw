import useCharacters from '../../hooks/useCharacters';
import '../../styles/Gallery.scss';
import { useParams } from "react-router";
import {Link} from 'react-router';


function Card (){

    const list = useCharacters();

    const {id} = useParams();
       
    if (list.length === 0) return "";
    
    const character = list.find(item => item.id === id);
    
    if (!character) return <div> <Link to="/" className="card-link"> volver atrás <span className="card-link__span">🧹</span></Link><p>Personaje no encontrado, comprueba que la url sea la correcta.</p></div>;

    return (
     <>
         <Link to="/" className="card-link"> volver atrás <span className="card-link__span">🧹</span></Link>
        <div className="card">
                <img className="card__image" src={ character.image ? character.image : "src/images/no-image.jpg"} />

                <div className="card__left-column">
                    <img className="card__house" src={ character.house === "Gryffindor" ? "src/images/griffindor.png" : character.house === "Slytherin" ? "src/images/slytherin.png" : character.house === "Hufflepuff" ? "src/images/hufflepuff.png" : character.house === "Ravenclaw" ? "src/images/ravenclaw.png" : "src/images/nohouse.png"} />
                    <div className="card__info">
                        <h4 className="card__title">{character.name}</h4>
                        <p className="card__info--01">{character.species}{character.wizard ? " wizard" : null}{character.hogwartsStudent ? ", Hogwarts student" : null}{character.hogwartsStaff ? ", Hogwarts staff" : null} </p>
                        <p><strong>Date of birth:</strong> {character.dateOfBirth}</p>
                        
                        <p><strong>House:</strong> {character.house}</p>
                    
                        <p><strong>Ancestry:</strong> {character.ancestry}</p>

                         <p><strong>Wand: </strong> {character.wand.wood ? "wood of " + character.wand.wood : ""} {character.wand.core ? " and core of " + character.wand.core : ""} {character.wand.length ? character.wand.length + " length wand." : ""}</p>

                        <p><strong>Other names:</strong> {character.alternate_names.length !== 0 ? character.alternate_names.map( (item, index) => <span  key={index}> {item}, </span>) : "none"} {character.alternate_names.length !== 0 ? " etc." : null}</p>
                    </div>
                </div>
         </div> 
     </>
    ); 
}

export default Card