import GalleryContent from './GalleryContent.js';

function Gallery() {

function onLoad(event) {
    console.log("Image loaded: " + "src/assets/img/"+event.target.id+".jpg");
}

    return (
        <div id="contentContainer">
            <h1 className="contentHeader">Gallery</h1>
            <div className="galleryContent">
                {GalleryContent.map((item, index) => (
                <div key={index} id="galleryItem">
                    <img onLoad={onLoad} className="galleryImage" id={item.id} src={"src/public/img/"+item.id+".jpg"} alt={item.description} />
                    <p className="galleryDescription">{item.description}</p>
                    </div>
                ))}
                </div>
                </div>
    )
}

export default Gallery;