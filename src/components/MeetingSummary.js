import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class MeetingSummary extends Component {

    buttonLinks = () => {
        var buttons = []
        for(var item in this.props.links){
            buttons.push(
                <ButtonGroup className="mr-2">
                    <Button class="helpfulLinks" href={this.props.links[item]} target="_blank">{item}</Button>
                </ButtonGroup>)
        }    
        return buttons;
    }

    render() {
        return (
            <Card id="meetingItem">
                <Card.Header>{this.props.date}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>{this.props.location}</Card.Subtitle>
                    <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonToolbar>
                        {this.buttonLinks()}
                    </ButtonToolbar>
                </Card.Footer>
            </Card>
        );
    }
}

export default MeetingSummary;