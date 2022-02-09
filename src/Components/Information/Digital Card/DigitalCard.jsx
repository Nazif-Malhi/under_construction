import React, {useState} from 'react';
import './DigitalCard.css';
import profile from '../resources/myImage.png'


const DigitalCard = () => {
  const [imgAnimation, setimgAnimation] = useState();
  const setAnim = () => {
      if(imgAnimation === 1){
          setimgAnimation(0);
      }
      else{
          setimgAnimation(1);
      }
  }
  
  return <div className='digitalCardBody'>
            <div className="bg_Circles">
              <div className="circle0"></div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
              <div className="circle5"></div>
            </div>
            <div className="digitalCard_main">
            
              <div className="digital_row flex-end">
              
                <div className="headerSignIn">
                
                  <a href='/'><i class="fa fa-sign-in" aria-hidden="true"></i></a>
                </div>
              </div>
              <div className="homesection align-items-center">
                
                <div className="digital_container">
                  
                  <div className="digital_row align-items-center">
                  
                    <div className="home_text">
                      <p>Hello I'm</p>
                      <h1>Nazif Malhi</h1>
                      <h2>Full - Stack Developer</h2>
                      <div className="wallet">
                      <ul>
                      <li><a href='/'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                      <li><a href='/'><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                      <li><a href='/'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                      <li><a href = '/'><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                    </div>
                    <div className="home_image">
                      <div className="img_box" onClick={setAnim} imgAnimation = {imgAnimation}>
                        <img className='pro' src={profile} alt="" />
                      </div>
                      <div className="toggle" imgAnimation = {imgAnimation}>
                        <li style={{'--i': 0 }}>
                          <a class="nav-link" href="/">
                            <i class="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>
                          </a>
                        </li>
                        <li style={{'--i': 1 }}>
                          <a class="box-link" href="/">
                            <i class="fa fa-th-list fa-fw mr-1"></i>
                          </a>
                        </li>
                        <li style={{'--i': 2 }}>
                          <a class="nav-link high" href="/">
                            <i class="fa fa-file-pdf-o fa-fw mr-1"></i>
                          </a>
                        </li>
                        <li style={{'--i': 3 }}>
                          <a class="nav-link" href="/">
                            <i class="fa fa-info-circle fa-fw mr-1"></i>
                          </a>
                        </li>
                        <li style={{'--i': 4 }}>
                          <a class="nav-link" href="/">
                            <i class="fa fa-certificate fa-fw mr-1"></i>
                          </a>
                        </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
};


export default DigitalCard;