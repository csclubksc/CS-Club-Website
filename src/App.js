import React, { Component } from 'react';
import Header from "./components/Header";
import Projects from "./components/Projects";
// import AboutUs from "./components/AboutUs";
// import MeetingSchedule from "./components/MeetingSchedule";
import Gallery from "./components/Gallery";
// import Projects from "./components/Projects";
import Resources from "./components/Resources";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.projectsRef = React.createRef();
    this.tempRef = React.createRef();
    this.galleryRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Header scrollRefs={{gallery: this.galleryRef, projects: this.projectsRef, resources: this.tempRef}}/>
        <div id="bodyWrapper">
          <Gallery scrollRef={this.galleryRef}/>
          {/* <AboutUs /> */}
          {/* <MeetingSchedule /> */}
          <Projects scrollRef={this.projectsRef} user="csclubksc"/>
          <Resources scrollRef={this.tempRef} />
          {/* <ContactUs /> */}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
