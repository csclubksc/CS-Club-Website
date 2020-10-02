import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class ContactUs extends Component {
    render() {
        return (
            <div id="contactUs" ref={this.props.scrollRef} style={{ margin: '40px', backgroundColor: 'black' }}>
                <SocialIcon target="_blank" url="https://twitter.com" />
                <span class="divider"></span>
                <SocialIcon target="_blank" url="https://github.com/csclubksc" />
                <span class="divider"></span>
                <SocialIcon target="_blank" url="https://facebook.com/KSCComputerScienceClub" />
                <span class="divider"></span>
                <SocialIcon target="_blank" url="https://instagram.com" />
            </div>
        );
    }
}

export default ContactUs;