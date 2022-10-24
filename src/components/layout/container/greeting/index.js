import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import Music from '../../../audio';
function Greeting(props) {
    const handleRedirect = (href) => {
        window.location = href;
    }
    return (
        <div className={clsx(Styles.greeting, "greeting")} >
            <div className={Styles.content}>
                <h3 className={Styles.textHello}>Xin chào!</h3>
                <h2 className={Styles.textThis}>Tôi là <span className={Styles.name}>
                    hòa
                </span></h2>
                <p className={Styles.textDeveloper}>Front-End Developer</p>
                <p className={Styles.textmusic}>
                    thư giản với bài nhạc nào  ♪
                </p>
                <Music />
                <p className={Styles.text}>tôi từng khá kiêu ngạo cho đến kia nhận ra mình không phải là gì cả ,
                    và đang đi kiếm câu trả lời cho riêng mình về fullstack Developer  </p>

                <div className={Styles.boxBtn}>
                    <button className={Styles.btn} onClick={() => handleRedirect("https://xoanen.vercel.app/cv/en")}>Download CV{`(En)`}</button>
                    <button className={Styles.btn} onClick={() => handleRedirect("https://xoanen.vercel.app/cv/vi")}>Download CV{`(Vi)`}</button>
                </div>
            </div>
        </div>
    );
}
export default Greeting;