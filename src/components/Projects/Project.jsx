import React from 'react';
import Card from '../Card/Card';
import "./Project.css"
import simon from '../../assets/simonsays.jpg';
import spotify from '../../assets/spotify.jpg';
import photo from '../../assets/photo.jpg';
import login from '../../assets/loginpage.png';
import tourism from '../../assets/tour.jpg';
function Project() {
    return (
        <div id="projects">
            <h1 id='para'>MY PROJECTS</h1>
            <div className="slider">
                <Card title="Simon Says Game" image={simon}/>
                <Card title="Spotify Clone" image={spotify}/>
                <Card title="Photography Portfolio" image={photo}/>
                <Card title="Login Page" image={login}/>
                <Card title="Tourism" image={tourism}/>
            </div>
        </div>
    );
}
export default Project;