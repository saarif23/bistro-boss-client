import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel >
            <div>
                <img src="https://i.ibb.co/KVFwgCX/01.jpg" />
              
            </div>
            <div>
                <img src="https://i.ibb.co/5xG2dLC/02.jpg" />
              
            </div>
            <div>
                <img src="https://i.ibb.co/P6TzW3K/03.png" />
               
            </div>
            <div>
                <img src="https://i.ibb.co/7NDcKv7/04.jpg" />
              
            </div>
            <div>
                <img src="https://i.ibb.co/7NGKb13/05.png" />
              
            </div>
            <div>
                <img src="https://i.ibb.co/8znCD3M/06.png" />
               
            </div>
        </Carousel>
    );
};

export default Banner;