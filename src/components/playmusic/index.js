import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { play, stop } from '../../redux/useMusic';
function PlayMusic(props) {
    const openMusic = useSelector(state => state.Music.open);
    const dispatch = useDispatch();
    const handlePlay = () => {
        dispatch(play());
    }
    const handleStop = () => {
        dispatch(stop());
    }
    return (
        <>
            {!openMusic ?
                <div className={Styles.BoxIcon} onClick={handlePlay}>
                    <i className={clsx("fa-solid fa-play", Styles.icon)}></i>
                    bấm vào để chơi nhạc
                </div> : <div className={Styles.BoxIcon} onClick={handleStop}>
                    <img src={process.env.PUBLIC_URL + '/image/music_icon.gif'} alt="icon" className={Styles.img} />
                    bấm vào để dừng chơi nhạc
                </div>}
        </>
    );
}

export default PlayMusic;