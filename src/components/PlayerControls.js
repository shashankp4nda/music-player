import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { usePalette } from 'react-palette'

function PlayerControls(props) {

    const { data, loading, error } = usePalette(props.song.img_src);

    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button 
                className="play-btn" 
                style={{backgroundImage: 'linear-gradient(to bottom, ' + data.vibrant + ' , ' + data.darkVibrant + ')'}}
                onClick={() => {
                    props.setIsPlaying(!props.isPlaying)
                }}
            >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
    )
}

export default PlayerControls
