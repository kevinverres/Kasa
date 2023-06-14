// import { useState } from 'react';
import { useParams } from 'react-router-dom'
import datas from "../../logements.json";
import Header from '../../component/Home/Header';
import Footer from '../../component/Home/Footer';
import Slide from '../../component/House/slide';
import Tag from '../../component/House/Tag';
import '../../assets/css/House.css';
import greyStar from '../../assets/img/grey_star.png';
import redStar from '../../assets/img/red_star.png';
import Collapse from '../../component/House/Collapse';
import Error from '../Error/Error';

function House({logo, alt, logo_footer}) {
    const searchParams = useParams("id").id
    const currentData = datas.filter(data => data.id === searchParams)
    if (currentData.length === 0) {
        return (
            <Error 
                logo = {logo}
                alt = {alt}
                logo_footer = {logo_footer}
            />
        )
    } else {
        // console.log(currentData)
        return (
            <>
                <Header 
                    logo = {logo}
                    alt = {alt}
                />
                <main className='container-house'>
                    <Slide 
                        slides = {currentData[0].pictures}
                        nbrSlides = {currentData[0].pictures.length}
                    />
                    <div className='container-information'>
                        <div className='house-all-information'>
                            <h1>{currentData[0].title}</h1>
                            <p>{currentData[0].location}</p>
                            <Tag 
                                data = {currentData}
                            />
                        </div>
                        <div className='host-all-information'>
                            <div className='host-information'>
                                <div className='host-name'>
                                    <span>{currentData[0].host.name.split(' ')[0]}</span>
                                    <span>{currentData[0].host.name.split(' ')[1]}</span>
                                </div>
                                <img src={currentData[0].host.picture} alt={"photo de "+ currentData[0].host.name}/>
                            </div>
                            <div>
                                {[...Array(5)].map((star, index) => {
                                    return (
                                        <img key={index} src={index + 1 <= currentData[0].rating ? redStar : greyStar} alt="star" />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='collapse-information'>
                        <Collapse 
                            title = {"Description"}
                            datas = {currentData[0].description}
                        />
                        <Collapse 
                            title = {"Équipements"}
                            datas = {currentData[0].equipments}
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
}

export default House;