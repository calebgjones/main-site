import PortfolioContent from "./PortfolioContent";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div id="contentContainer">
        <h1 className="contentHeader">Portfolio</h1>
        {PortfolioContent.map((item, index) => (
            <div className="portfolioContent">
                <a href={item.link} target="_blank" rel="noreferrer">
                <div key={index} id="galleryItem">
                    <img className="galleryImage" id={item.id} src={"/img/PortfolioContent/"+item.id+".jpg"} alt={item.description} />
                </div>
                </a>
                <div className="portfolioDetails">
                    <p id="portfolioTitle">{item.title}</p>
                    <p id="portfolioTech">{item.tech}</p>
                    <p id="portfolioDevs">{item.devs}</p>
                </div>
                </div>
            ))}
        </div>
    )
    }

export default Portfolio;