import '../../styles/Header.scss';
import hpLogo from '../../images/hp-logo.png'

function Header (){

    return (
        
        <section className="header">
            <img className="header__logo" src={hpLogo} />
        </section>
        
    ); 
}

export default Header