import React from 'react';
import Styles from './index.module.css';
import Greeting from './greeting';
import Avatar from '../../avatar';
import Like from './like';
import Skill from './skill';
import Contant from './contant';
import Product from './product';
function Container(props) {
    return (
        <div className={Styles.Container}>
            <div className={Styles.wrapper}>
                <Greeting />
                <Avatar />
            </div>
            <Like />
            <Skill />
            <Product />
            <Contant />
        </div>
    );
}

export default Container;