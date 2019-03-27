import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Resources extends React.Component {
    render() {
        return (
            <CardDeck id="resourceDeck">
                <Card>
                    <Card.Body>
                        <Card.Title>Resources</Card.Title>
                        <Card.Text>
                            A Collection of recommended books and resources curated by the CS Club members
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Cracking the Coding Interview</Card.Title>
                        <Card.Text>
                            A popular book to get you brushed up on the skills required to nail a technical interview
                        </Card.Text>
                        <Button href="http://www.crackingthecodinginterview.com/" target="_blank">Visit the Author's Website</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        );
    }
}

export default Resources;