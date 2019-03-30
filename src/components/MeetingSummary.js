import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MeetingSummary extends Component {
    render() {
        return (
            <Card>
                <Card.Header>{this.props.date}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>{this.props.club_session ? "!(CS Club)" : "CS Club"}</Card.Subtitle>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default MeetingSummary;