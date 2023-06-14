import Banner from "../../component/Home/Banner";
import Header from "../../component/Home/Header";
import Gallery from "../../component/Home/Gallery";
import Footer from "../../component/Home/Footer";

function Home({logo, alt, logo_footer}) {
    return (
        <div className="home">
            <Header 
                logo = {logo}
                alt = {alt}
            />
            <Banner />
            <Gallery />
            <Footer 
                logo = {logo_footer}
                alt = {alt}
            />
        </div>
    );
}

export default Home;