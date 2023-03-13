import React from 'react';
import './style/Contact.scss'

const Contact = (props) => {
    return (
        <div id='contact'>
            <main className="contact_m">
                <h2>
                    <p>
                        LET'S 
                        <span> W</span>
                        <span>O</span>
                        <span>R</span>
                        <span>K</span>
                        <span>&nbsp;</span>
                        <span>T</span>
                        <span>O</span>
                        <span>G</span>
                        <span>E</span>
                        <span>T</span>
                        <span>H</span>
                        <span>E</span>
                        <span>R</span>
                    </p>
                </h2>
                <section className="info">
                    <p>NAME: 김미화</p>
                    <p>E-MAIL: wmfskf@naver.com</p>
                    <p>ADDRESS: 경기도 오산시 죽미마을휴튼 9단지</p>
                    <p>PHONE: 010-2023-7331</p>
                </section>
            </main>
        </div>
    );
};

export default Contact;