import marker from '../images/marker.png';

function Entry(props){
    return (
        <div className="entry">
            <div className="entry__container">
                <img
                    className="entry__main-image"
                    src={props.img}
                    alt={`Travel Journal ${props.country}`}
                />
                <div className="entry__details">
                    <div className="entry__location-row">
                        <img className="entry__marker-icon" src={marker} alt="Marker Icon" />
                        <span style={{ display: props.country ? "block" : "none" }} className="entry__country">{props.country}</span>
                        <a
                            className="entry__map-link"
                            href={props.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            view on google map
                        </a>
                    </div>
                    <div className="entry__title-row">
                        <h2 className="entry__title">{props.title}</h2>
                    </div>
                    <div className="entry__description-row">
                        <p className="entry__description">
                            <span className="entry__dates">{props.dates}</span>
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;