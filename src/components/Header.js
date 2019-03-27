import React from 'react';
import Nav from 'react-bootstrap/Nav';

const links = [
    "Recommended Books",
    "Meetings", 
    "Gallery", 
    "Projects", 
    "Contact Us",
];

const linkTags = [];

for(var i = 0; i < links.length; i++){
    linkTags.push(<li><a href="#">{links[i]}</a></li>);
};

const Header = (props) => (
    <div id="header">
        <img id="logo" alt="logo" src={require("../resources/TempHeader.PNG")} />
        <Nav fill justify variant="tabs"
            activeKey="#"
            onSelect={selectedKey => {
                    window.scrollTo(0, props.scrollRefs[selectedKey].current.offsetTop);
                    console.log(selectedKey);
                }
            }>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Meetings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="resources">Resources</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
);

export default Header;