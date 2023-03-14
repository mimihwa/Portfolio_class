import React from 'react';
import Header from '../conponents/Header';
import './style/kocca.scss'

const koccas = (props) => {
    return (
        <div>
            <Header />
            <section id="kocca">
                    <div className="color_box">
                        <div className="text">
                            <h2>한국콘텐츠진흥원</h2>
                            <p>HTML, CSS, JQUERY를 이용하여 웹표준, 웹접근성을 고려하여 제작한 관공서 킁론 코딩</p>
                            <div className="skills">
                                
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default koccas;