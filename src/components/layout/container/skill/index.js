import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import Cardskill from './cardSkill';
import { listSkill } from '../../../../data/ListSkill';
import Heading from '../heading';
function Skill(props) {
    return (
        <div className={clsx(Styles.skill, "skill")}>
            <Heading text="Kỹ năng" />
            <div className={clsx(Styles.listSkill, "row gx-0")}>
                {listSkill.map((item, index) =>
                    <Cardskill name={item.name} key={index} url={item.url} />
                )}
            </div>
        </div>
    );
}

export default Skill;