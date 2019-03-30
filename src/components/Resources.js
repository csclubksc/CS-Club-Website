import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Resources extends React.Component {
    render() {
        return (
            <CardDeck id="resourceDeck" ref={this.props.scrollRef}>
                <Card id="titleCard">
                    <Card.Body>
                        <Card.Title><h1>Bookshelf</h1></Card.Title>
                        <Card.Text>
                           <article>A collection of CS Club recommended books to help improve your skills as a developer.<br/><br/>
                                    Content ranges from career prep to software engineering best practices and more pure CS concepts<br /><br />
                                    Please feel free to suggest new books at club meetings to be added to the list!</article> 
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
                        <Card.Text>The defacto standard in writing quality Java code, a must have for professional java developers who want to write Java the right way</Card.Text>
                        <Button href="https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/"
                            target="_blank">Check it Out on O'Reilly</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Focus: Quality Software Design</Card.Header>
                    <Card.Body>
                        <Card.Img class="bookImg" src={require("../resources/designPatterns.jpg")} />
                        <Card.Subtitle>By Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides</Card.Subtitle>
                        <Card.Text>The classic "Gang of Four" book on Design Patterns. An oldie but a goodie.</Card.Text>
                        <Button href="https://www.oreilly.com/library/view/design-patterns-elements/0201633612/"
                            target="_blank">Check it Out on O'Reilly</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        );
    }
}

export default Resources;