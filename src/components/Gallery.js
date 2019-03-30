import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Gallery extends Component {
    render() {
        return (
            <div id="banner" ref={this.props.scrollRef}>
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
                            src={require("../resources/code.jpg")}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={require("../resources/whiteboard.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Gallery;