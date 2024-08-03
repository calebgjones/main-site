import '../ContentArea/ContentArea.css';
import GalleryContent from './GalleryContent.js';

function Gallery() {
    return (
        <div id="contentContainer">
            <h1 className="contentHeader">Gallery</h1>
            <div className="galleryContent">
                {GalleryContent.map((item, index) => (
                <div key={index} id="galleryItem">
                    <img className="galleryImage" id={item.id} src={"/src/assets/img/"+item.id+".jpg"} alt={item.description} />
                    <p>{item.description}</p>
                    </div>
                ))}
                </div>
                </div>
    )
}

export default Gallery;