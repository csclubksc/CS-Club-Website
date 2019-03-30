import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
    
class GithubProject extends React.Component {
    render(){
        return(
            <Card>
                <Card.Header>Outstanding Issues: {this.props.gitHubProject.open_issues_count}</Card.Header>
                {/* <Card.Img variant="top" src={this.props.gitHubProject.owner.avatar_url} /> */}
                <Card.Body>
                    <Card.Title>{this.props.gitHubProject.full_name}</Card.Title>
                    <Card.Subtitle>Primary Language: {this.props.gitHubProject.language}</Card.Subtitle>
                    <Card.Text>
                        {!this.props.gitHubProject.description ? "No Description" : this.props.gitHubProject.description}
                    </Card.Text>
                    <Button href={this.props.gitHubProject.html_url} target="_blank" variant="primary">Visit Project Page</Button>
                </Card.Body>
            </Card>
        );
    }   
}

export default GithubProject;