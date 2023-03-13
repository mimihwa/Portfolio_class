import React, {useRef} from 'react';
import './style/Main.scss'

const Main = () => {
  
  const titleRef=useRef();
  const handleMouseMove=(rotate)=>{
    let x = (window.innerWidth / 2 - rotate.clientX) / 20;
    let y = (window.innerHeight / 2 - rotate.clientY) / 10;

    titleRef.current.style.transform = "rotateY(" + -x + "deg) rotateX(" + y + "deg)"
  }
  const handleMouseOut=()=>{
    titleRef.current.style.transform = "rotate(0)"
  }

    return (
      <div id="main">
        <main className="main_m">
          <div className="container" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
            <p className='title' ref={titleRef}>
              HELLO, I'M A<br />
              PRONT-END DEVELOPER <span> Mihwa! </span>
            </p>
          </div>
        </main>
    </div>
    );
};

export default Main;