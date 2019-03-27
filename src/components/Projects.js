import React from 'react';
import GithubProject from './GithubProject'
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user}/repos`)
            .then(response => response.json())
            .then(data => this.setState({projects: data}));
    }

    getProjectTags() {
        var projs = [];
        var jsonProjs = this.state.projects;
        for(var i = 0; i < jsonProjs.length; i++){
            projs.push(<GithubProject gitHubProject={jsonProjs[i]}/>);
        }
        return projs;
    }
    
    render(){
        return (
            <CardDeck ref={this.props.scrollRef} id="githubProjects">
                <Card>
                    <Card.Body>
                        <Card.Title><h1>Github Projects</h1></Card.Title>
                        <Card.Text>
                            A listing of all the public projects on our official GitHub page.
                            Feel free to contribute!
                        </Card.Text>
                    </Card.Body>
                </Card>
                {this.state.projects.length != 0 ? this.getProjectTags() : null}
            </CardDeck>
        );
    }
}

export default Projects;