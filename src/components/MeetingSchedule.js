import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MeetingSchedule extends Component {
    render() {
        return (
            <div ref={this.props.scrollRef}>
                <Card>
                    <Card.Header>Meeting Schedule</Card.Header>
                    <Card.Body>
                        <Card.Text>Suh</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MeetingSchedule;