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
                        <Card.Title><h1>Recommended Books</h1></Card.Title>
                        <Card.Text>
                           <article>A collection of CS Club curated books to help improve your skills as a developer.</article> 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Focus: Preparing for Interviews</Card.Header>
                    <Card.Body>
                        <Card.Img class="bookImg" src={require("../resources/crackCode.jpg")} />
                        <Card.Subtitle>By Gayle Laakmann McDowell</Card.Subtitle>
                        <Card.Text>
                            A popular book to get you brushed up on the skills required to nail a technical interview
                        </Card.Text>
                        <Button href="http://www.crackingthecodinginterview.com/" target="_blank">Visit the Author's Website</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Focus: Java Best Practices</Card.Header>
                    <Card.Body>
                        <Card.Img class="bookImg" src={require("../resources/effectiveJava.jpg")} />
                        <Card.Subtitle>By Joshua Bloch</Card.Subtitle>
                        <Card.Text>The defacto standard in writing quality Java code</Card.Text>
                        <Button href="https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/"
                            target="_blank">Visit the Publisher's Website</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        );
    }
}

export default Resources;