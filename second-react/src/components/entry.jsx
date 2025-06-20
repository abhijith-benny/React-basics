import marker from '../images/marker.png';

function Entry(){
    return (
        <div className="entry">
            <div className="entry__container">
                <img
                    className="entry__main-image"
                    src="https://scrimba.com/links/travel-journal-japan-image-url"
                    alt="Travel Journal Japan"
                />
                <div className="entry__details">
                    <div className="entry__location-row">
                        <img className="entry__marker-icon" src={marker} alt="Marker Icon" />
                        <span className="entry__country">Japan</span>
                        <a
                            className="entry__map-link"
                            href="https://maps.app.goo.gl/gNoia3XnrF7NMehA8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            view on google map
                        </a>
                    </div>
                    <div className="entry__title-row">
                        <h2 className="entry__title">Mount Fuji</h2>
                    </div>
                    <div className="entry__description-row">
                        <p className="entry__description">
                            <span className="entry__dates">12 Jan, 2021 - 24 Jan, 2021</span>
                            Mount Fuji is the highest mountain in Japan, standing at 3,776 meters. It is an iconic symbol of the country and a popular destination for tourists and climbers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;