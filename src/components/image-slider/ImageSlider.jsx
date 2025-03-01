import "./style.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({url}){
    const [images,setImages] = useState([]);
    const [currImage,setCurrImage] = useState(0);

    function moveLeft(){
        setCurrImage(currImage => (currImage-1 + images.length )%images.length )
    }
    function moveRight(){
        setCurrImage(currImage => (currImage+1)%images.length);
    }

    async function fetchImage(url){
        const responce = await fetch(url);
        const data = await responce.json() ; 
        setImages(data);
    }
    useEffect(()=>{
        fetchImage(url);
    },[]);
    return (
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={moveLeft}
        />
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className={
                  currImage === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}

        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={moveRight}
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currImage === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrImage(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    );
}