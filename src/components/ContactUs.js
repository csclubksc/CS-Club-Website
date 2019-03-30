import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ContactUs extends Component {
    render() {
        return (
            <div id="contactUs" ref={this.props.scrollRef}>
                <Card>
                    <Card.Title>Filler</Card.Title>
                </Card>
            </div>
        );
    }
}

export default ContactUs;