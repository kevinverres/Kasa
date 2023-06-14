import Footer from "../../component/Home/Footer";
import Aboutimage from "../../assets/img/About.png";
import "../../assets/css/About.css";
import Collapse from "../../component/House/Collapse";
import Header from "../../component/Home/Header";

function About({logo, alt, logo_footer}) {
    return (
        <>
            <Header 
                logo = {logo}
                alt = {alt}
            />
            <main className="About-main">
                <img className="image-head" src= {Aboutimage} alt={'Un paysage montagneux'} />
                <div className="multiple-collapse">
                    <Collapse 
                        title = {"Fiabilité"}
                        datas = {"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}
                    />
                    <Collapse 
                        title = {"Respect"}
                        datas = {"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                    />
                    <Collapse 
                        title = {"Service"}
                        datas = {"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                    />
                    <Collapse 
                        title = {"Sécurité"}
                        datas = {"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
                    />
                </div>
            </main>
            <Footer 
                logo = {logo_footer}
                alt = {alt} 
            />
        </>
    )
}

export default About;