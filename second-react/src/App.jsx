import Header  from "./components/header";
import Entry from "./components/entry";

function AppContainer(){
    return (
        <>
            <Header />
            <Entry 
                img="https://scrimba.com/links/travel-journal-japan-image-url"
                country="Japan"
                mapLink="https://maps.app.goo.gl/gNoia3XnrF7NMehA8"
                title="Mount Fuji"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                description="Mount Fuji is the highest mountain in Japan, standing at 3,776 meters. It is an iconic symbol of the country and a popular destination for tourists and climbers."
            />
            <Entry 
                img="https://whc.unesco.org/uploads/thumbs/site_0438_0035-750-750-20241024162522.jpg"
                country="China"
                mapLink="https://maps.app.goo.gl/6n5Q6v8b6v9Q8v6A9"
                title="Great Wall of China"
                dates="1 May, 2022 - 10 May, 2022"
                description="The Great Wall of China is a series of fortifications built along the historical northern borders of China. It is one of the most impressive architectural feats in history and a UNESCO World Heritage site."
            />
            <Entry 
                img="https://www.tajmahal.gov.in/images/gallery/taj-mahal/big/6.jpg"
                country="India"
                mapLink="https://maps.app.goo.gl/3n5Q6v8b6v9Q8v6A9"
                title="Taj Mahal"
                dates="15 Aug, 2022 - 25 Aug, 2022"
                description="The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
            />
       </>
    )
}

export default AppContainer;