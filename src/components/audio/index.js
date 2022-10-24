import React, { useEffect, useRef } from 'react';
import PlayMusic from '../playmusic';
import { useDispatch } from 'react-redux';
import { getmusic } from '../../redux/useMusic';
function Music(props) {
    const music = useRef()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getmusic(music.current));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <audio ref={music}>
                <source src={process.env.PUBLIC_URL + "/music/music.mp3"} type="audio/ogg"></source>
            </audio>
            <PlayMusic />
        </>
    );
}

export default Music;