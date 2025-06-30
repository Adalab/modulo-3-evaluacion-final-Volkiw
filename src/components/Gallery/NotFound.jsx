import noChar from '../../images/no-character.png';
import '../../styles/App.scss';

function NotFound ({searchName}) {


    return <>
    <div className="not-found">
    <p>There are no characters that match the search "{searchName}".</p>
    </div>
    <img className="img--404" src={noChar} />
    </>
}

export default NotFound