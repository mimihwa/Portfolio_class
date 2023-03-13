import React from 'react';
import './style/Profile.scss'

const Profile = (props) => {
    return (
        <div id='profile'>
        
            <section className="profile_c">
                <h2><span>ABOUT ME</span></h2>
                <div className="flex">
                    <div className="flex">
                        <section className="pic">
                            <img src="./img/j.jpg" alt="이미지" />
                        </section>
                    </div>
                    <div className="information">
                        <section className="text">
                            <p>name: 김미화</p>
                            <p>birth: 1996.08.23</p>
                            <p>education: 홍익대학교 커뮤니테이션디자인과</p>
                            <p className="intro">
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                                안뇽안뇽 나는 미화야 이제 공부해야돼~ 
                            </p>
                        </section>
                        <section className="skills">
                            <h3>My skills</h3>
                            <div className="skill">
                                <span>Html</span>
                                <span>Scss</span>
                                <span>Jquery</span>
                                <span>Javascript</span>
                                <span>React</span>
                                <span>Vue</span>
                                <span>Typescript</span>
                            </div>
                        </section>
                        <section className="skills">
                            <h3>My Tools</h3>
                            <div className="skill">
                                <span>git</span>
                                <span>axios</span>
                                <span>api</span>
                                <span>figma</span>
                                <span>photoshop</span>
                                <span>illus</span>
                                <span>premier</span>
                                <span>aftereffect</span>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;