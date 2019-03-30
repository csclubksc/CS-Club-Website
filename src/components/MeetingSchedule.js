import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import MeetingSummary from './MeetingSummary';

class MeetingSchedule extends Component {
    render() {
        return (
            <div id="meetingSched" ref={this.props.scrollRef}>
                <Card>
                    <Card.Header>Upcoming Events</Card.Header>
                    <Card.Body>
                        <CardDeck id="meetingCards">
                            <MeetingSummary title="Working with Raspberry Pis"
                                            description="TIME"
                                            date="April 3, 2019" /> 
                            <MeetingSummary title="Leetcode Practice"
                                            club_session="!"
                                            description="TIME"
                                            date="April 10, 2019" />
                            <MeetingSummary title="Robocode"
                                            description="TIME"
                                            date="April 17, 2019" />               
                        </CardDeck>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MeetingSchedule;