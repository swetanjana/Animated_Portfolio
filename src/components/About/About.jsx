import react from 'react';
import './About.css';
import Card from '../Card/Card';
import mern from '../../assets/mern.png';
import machine from '../../assets/machine.png';
import dsa from '../../assets/dsa.png';
function About(){
    return(
       <div id="about">
             <div className="leftabout">
                 <div className="circle-line">
                     <div className="circle"></div>
                     <div className="line"></div>
                     <div className="circle"></div>
                     <div className="line"></div>
                     <div className="circle"></div>
                 </div>
                 <div className="aboutdetails">
                 <div className="personalinfo">
                        <h1>Personal Info</h1>
                        <ul>
                           <li>
                            <span>NAME</span> : SWETANJANA MAITY
                           </li> 
                           <li>
                            <span>AGE</span> : 21
                           </li> 
                           <li>
                           <span>LOCATION</span> : BHUBANESWAR
                           </li> 
                           <li>
                           <span>LANGUAGE SPOKEN</span>  : ENGLISH,HINDI,BENGALI
                           </li> 
                        </ul>  
                   </div>
                  <div className="education">
                     <h1>Education</h1>
                     <ul>
                        <li>
                         <span>DEGREE</span> : B-TECH</li> 
                          <li>
                         <span>BRANCH</span> : COMPUTER SCIENCE ENGINEERING</li> 
                          <li>
                         <span>CGPA</span> : 9.47</li> 
                     </ul>  
                 </div>
                  <div className="skills">
                     <h1>Skills</h1>
                     <ul>
                        <li>REACT DEVELOPER</li> 
                         <li>DSA</li> 
                          <li>JAVA</li> 
                     </ul>  
                 </div>  
              </div>
             </div>
             <div className="rightabout">
                <Card title="MERN STACK DEVELOPER" image={mern}/>
                <Card title="MACHINE LEARNING" image={machine} />
                <Card title="DSA" image={dsa}/>
             </div>
       </div>
    )
}
export default About;