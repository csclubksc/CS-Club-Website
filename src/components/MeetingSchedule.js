import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import MeetingSummary from './MeetingSummary';

class MeetingSchedule extends Component {
    constructor(props){
        super(props);
        this.links = []
        this.links.push({
            "Raspberry Pi Docs": "https://www.raspberrypi.org/documentation/", 
            "Explore Pi Projects": "https://projects.raspberrypi.org/en/"
        })
        this.links.push({
            "Check Out Leetcode": "https://www.leetcode.com"
        })
        this.links.push({
            "Robocode Website": "https://robocode.sourceforge.io/"
        })
    }


    render() {
        return (
            <CardDeck id="meetingCards" ref={this.props.scrollRef}>
                <Card id="titleCard">
                    <Card.Body>
                        <Card.Title><h1>Upcoming Meetings</h1></Card.Title>
                        <Card.Text><article>Here are the next few meetings and events for the club</article></Card.Text>
                    </Card.Body>
                </Card>
                <MeetingSummary title="Working with Raspberry Pis"
                                location="Science Center 161"
                                description="Work with the club's newly aquired Raspberry Pi B+ boards on a variety of projects"
                                date="April 3, 2019" 
                                links={this.links[0]}/> 
                <MeetingSummary title="Leetcode Practice"
                                location="Computer Science Lab"
                                description="We'll be practicing some Leetcode questions to see what progress we've made"
                                date="April 10, 2019"
                                links={this.links[1]} />
                <MeetingSummary title="Robocode"
                                location="Science Center 161"
                                description="Work with or against other team members to code the best Java virtual robot gladiator"
                                date="April 17, 2019"
                                links={this.links[2]} />               
            </CardDeck>
        );
    }
}

export default MeetingSchedule;