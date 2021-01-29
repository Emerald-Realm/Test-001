import React from "react";
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { Link } from 'react-router-dom'
import "../../Styles/style.css";
import Big from '../../images/logo 2@3x.png'

function Home() {
  return (
    <div>
      {/* <Transformation effect="contrast:0" radius="10" />
          <Transformation effect="improve" gravity="north" height="230" radius="max" width="200" crop="fill" />
          <Transformation effect="shadow" quality="50" />
          <Transformation  opacity="20" /> */}
      <div className="content">
        <div>
          <Image cloudName='fiendgod' publicId="Bio%20/bioaidlogo_bno9wk.svg" className='big-logo' >
          </Image>
        </div>
        {/* <img src={Big} className='big-logo' alt="bio aid logo big" /> */}
        <div className="context">
          <div className="motto">
            <p className='motto-one'>Take Some Time.</p>
            <p className='motto-two'>To Learn First Aid and CPR,</p>
            <p className='motto-three'>It Saves Life And It Works</p>
          </div>
          <Link to='/allQuestions' className="start-btn">
            Start Exam
          </Link>
          <p className='pass'>Pass Our Exam and Receive Your Certificate</p>
        </div>
        <div className="show-logo"></div>
      </div>
    </div>
  );
}

export default Home;
