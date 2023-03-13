import React, {useState,/*  useRef */ } from 'react';
import  {Link } from 'react-router-dom';
import './style/Project.scss';

const Project = () => {
    const [color, setColor]=useState(true);
    /* const imgRef=useRef();
    const handleMouseOver= () =>{
        imgRef.current.src='./img/con_color.png'
    }
    const handleMouseOut= () =>{
        imgRef.current.src='./img/con_black.png' 
    } */

    const handleMouseOver= () =>{
        setColor(false)
    }
    const handleMouseOut= () =>{
        setColor(true)
    }

    return (
        <div id='project'>
            <main className="project_m">
                <div className="pro_list">
                    <h2><span>PROJECT</span></h2>
                            <Link to="/Kocca" className='pro_item project1' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                <h3>01. <span className='kr_font'>한국콘텐츠진흥원</span></h3>
                                <p># HTML <br /> # CSS <br /> #JQUERY</p>
                                <img src="./img/project-graphics1.svg" alt="project1" />
                                <img /* ref={imgRef} */ className={color? 'black detail_photo' : 'detail_photo'} src="./img/con_color.png" alt="color" />
                            </Link>
                            <Link to="/Megabox" className='pro_item project2'>
                                <h3>02. <span className='kr_font'>MEGABOX</span></h3>
                                <p># HTML <br /> # CSS <br /> # 반응형</p>
                                <img src="./img/project-graphics2.svg" alt="project2" />
                                <img className='detail_photo' src="./img/megabox_color.png" alt="color" />
                            </Link>
                            <Link to="/Soomgo" className='pro_item project3'>
                               <h3>03. <span className='kr_font'>숨고</span></h3>
                                <p># HTML <br /> # CSS <br /> # 반응형</p>
                                <img src="./img/project-graphics3.svg" alt="project3" />
                                <img className='detail_photo' src="./img/soomgo_color.png" alt="color" />
                            </Link>
                            <Link to="/Todolist" className='pro_item project4'>
                                <h3>04. <span className='kr_font'>TO DO LIST</span></h3>
                                <p># HTML <br /> # CSS <br /> # Vue</p>
                                <img src="./img/project-graphics4.svg" alt="project4" />
                                <img className='detail_photo' src="./img/megabox_color.png" alt="color" />
                            </Link>
                            <Link to="/Trello" className='pro_item project5'>
                                <h3>05. <span className='kr_font'>Coin Tracker</span></h3>
                                <p># HTML <br /> # CSS <br /> # JAVASCRIPT <br /> # REACT</p>
                                <img src="./img/project-graphics5.svg" alt="project5" />
                                <img className='detail_photo' src="./img/megabox_color.png" alt="color" />
                            </Link>
                            <Link to="/Cointracker" className='pro_item project6'>
                                <h3>06. <span className='kr_font'>Trello</span></h3>
                                <p># HTML <br /> # CSS <br /> # JAVASCRIPT</p>
                                <img src="./img/project-graphics6.svg" alt="project6" />
                                <img className='detail_photo' src="./img/megabox_color.png" alt="color" />
                            </Link>
                            <Link to="/Netflix" className='pro_item project7'>
                                <h3>07. <span className='kr_font'>Netflix</span></h3>
                                <p># HTML <br /> # CSS <br /> # JAVASCRIPT</p>
                                <img src="./img/project-graphics7.svg" alt="project7" />
                                <img className='detail_photo' src="./img/megabox_color.png" alt="color" />
                            </Link>
                </div>
            </main>
        </div>
    );
};

export default Project;