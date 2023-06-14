import '../../assets/css/slide.css';
import { useState } from 'react';
const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>

function Slide({slides, nbrSlides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    function goToPrevious() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? nbrSlides - 1 : currentIndex -1
        setCurrentIndex(newIndex);
    }
    
    function goToNext() {
        const isLastSlide = currentIndex === nbrSlides - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }
    if (nbrSlides === 1) {
        return (
            <div className='slider'>
                <div className='slider-box'>
                    <img src={slides[currentIndex]} alt={"image "+ currentIndex + 1} className='slider-image'/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='slider'>
                <div className='slider-box'>
                    <div className='arrowLeft' onClick={goToPrevious}>{arrowLeft}</div>
                    <div className='arrowRight' onClick={goToNext}>{arrowRight}</div>
                    <img src={slides[currentIndex]} alt={"image "+ currentIndex + 1} className='slider-image'/>
                    <p className='slider-counter'>{currentIndex + 1+"/"+nbrSlides}</p>
                </div>
            </div>
        )
    }
}

export default Slide;