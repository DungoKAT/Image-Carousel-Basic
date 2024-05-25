import { useState } from "react";
import ImageData from "./ImageData";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const prevSlide = () => {
        currentImage === 0 ? setCurrentImage(ImageData.length-1) : setCurrentImage(currentImage-1)
    }
    const nextSlide = () => {
        currentImage === ImageData.length-1 ? setCurrentImage(0) : setCurrentImage(currentImage+1)
    }
    return (
        <section className="slider">
            <BsFillArrowLeftCircleFill className="arrow" onClick={prevSlide}/>
            {ImageData.map((data, index) => 
                <div className={currentImage === index ? "slide active" : "slide"} key={index}>
                    {currentImage === index && (
                        <div className="image-show">
                            <img className="image" src={data.image} alt={data.title}/>
                            <p>{data.title}</p>
                        </div>
                    )}
                </div>
            )}
            <BsFillArrowRightCircleFill className="arrow" onClick={nextSlide}/>
        </section>
    );
};

export default ImageSlider;