import React from 'react';
import Styles from './index.module.css';
function Heading({ text }) {
    return (
        <div className={Styles.boxText}>
            <h3 className={Styles.text}>{text}</h3>
        </div>
    );
}

export default Heading;