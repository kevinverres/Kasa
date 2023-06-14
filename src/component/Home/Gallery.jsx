import Card from "./Card";
import datas from "../../logements.json";
import "../../assets/css/Gallery.css";

function Gallery() {
    return (
        <main className="home-gallery">
            {datas.map(data => {
                // console.log(data)
                return (
                    <Card
                        key = {data.id}
                        id = {data.id}
                        title = {data.title}
                        cover = {data.cover}
                    />
                )
            })}
        </main>
    );
}

export default Gallery;