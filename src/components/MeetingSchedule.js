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
                                            description="Work with the club's newly aquired Raspberry Pi B+ boards on a variety of projects"
                                            date="April 3, 2019" /> 
                            <MeetingSummary title="Leetcode Practice"
                                            club_session="!"
                                            description="We'll be practicing some Leetcode questions to see what progress we've made"
                                            date="April 10, 2019" />
                            <MeetingSummary title="Robocode"
                                            description="Work with or against other team members to code the best Java virtual robot gladiator"
                                            date="April 17, 2019" />               
                        </CardDeck>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MeetingSchedule;