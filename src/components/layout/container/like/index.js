import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import Cardlike from './cardLike';
import { listLike } from '../../../../data/ListLike';
import Heading from '../heading';
function Like(props) {
    return (
        <div className={clsx(Styles.like, "like")} >
            <Heading text="Yêu thích" />
            <div className={clsx(Styles.listLike, "row gx-0")}>
                {listLike.map((item , index) =>
                    <Cardlike name={item.name} key={index}
                        description={item.description}
                        icon={item.icon}
                    />
                )}
            </div>
        </div>
    );
}

export default Like;