import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';

class Gallery extends Component {
    render() {
        return (
            <div id="banner">
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.keene.edu/ksc/assets/files/31765/ww_computersciencerobotics_22180418.standard-hero.1600x667.jpg?20180420150402"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.keene.edu/ksc/assets/files/29690/ww_karenstanish_250417_005.standard-hero.1600x667.jpg?20180330150310"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.keene.edu/ksc/assets/files/31499/ww_anthonyscioliinbre_02112016_07.standard-hero.1600x667.jpg?20180409100400"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Gallery;