import React from 'react';
import './Home.css';
import pic from '../../assets/my_pic.jpg';
import { Typewriter } from 'react-simple-typewriter';
function Home(){
    return(
       <div id="home">
        <div className="lefthome">
         <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">SWETANJANA MAITY</div>
            <div className="line3">
                 <span style={{ fontWeight: 'bold', fontSize: '24px', color: '#8B5E83' }}>
        <Typewriter
          words={['REACT DEVELOPER', 'UI/UX DESIGNER', 'ASPIRING SDE','AI/ML ENTHUSIAST']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
        </div>
         <button>HIRE ME</button>
         </div>
        </div>
        <div className="righthome">
            <img src={pic} alt="" />
        </div>
       </div>
    )
}
export default Home;