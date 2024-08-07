import GalleryContent from './GalleryContent.js';
import './Gallery.css';
import { useState } from 'react';

function Gallery() {

    var [popUpVisible, setPopUpVisible] = useState(false);
    var [currentID, setCurrentID] = useState(0);

const handleClick = (item) => {
    setCurrentID(item.id);
    setPopUpVisible(!popUpVisible);
    console.log("Active ID: "+item.id);
}

function handleClose () {
    setPopUpVisible(!popUpVisible);
}

    return (
        <div id="contentContainer">
            <h1 className="contentHeader">Gallery</h1>
            <div id="galleryContainer">
            {GalleryContent.map((item, index) => (
            <div className="galleryContent">
                <div key={index} id="galleryItem">
                    <div id="popUpContainer">
                        <div id="popUp" style={{display: popUpVisible ? 'block' : 'none'}}>
                            <img id="popUpImage" src={"/img/"+currentID+".jpg"} alt="popUp" />
                        </div>
                    </div>
                    <img onClick={() => handleClick(item)} className="galleryImage" id={item.id} src={"/img/"+item.id+".jpg"} alt={item.description} />
                    <p className="galleryDescription">{item.description}</p>
                    </div>
                </div>
            ))}
            <button onClick={() => handleClose()} style={{display: popUpVisible ? 'block' : 'none'}} id="popUpClose">Close</button>
            </div>
                </div>
    )
}

export default Gallery;