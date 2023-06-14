import Header from "../../component/Home/Header";
import {Link} from "react-router-dom"
import '../../assets/css/Error.css'
function Error({logo, alt}) {
    return (
        <div className="E404">
            <Header 
                logo = {logo}
                alt = {alt}
            />
            <div className="E404-info">
                <h1>404</h1>
                <p>Oups! La page que 
vous demandez n'existe pas.</p>
                <Link to="/" className="return">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}

export default Error;