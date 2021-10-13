import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import Tilt from 'react-tilt';
import { usePalette } from 'react-palette'

function Player(props) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const { data, loading, error } = usePalette(props.songs[props.currentSongIndex].img_src);

    useEffect(() => {
        if(isPlaying)   {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards)   {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length -1 ) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0 ) {
                    temp = props.songs.length -1;
                }
                return temp;
            });
        }
    }

    return (
        <Tilt className="c-player" style={{backgroundImage: 'linear-gradient(to bottom, ' + data.darkVibrant + ' , grey)'}}>
                <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <h4>Playing Now</h4>
                <PlayerDetails song={props.songs[props.currentSongIndex]}/>
                <PlayerControls 
                    song={
                        props.songs[props.currentSongIndex]} 
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        SkipSong={SkipSong}
                />
        </Tilt>
    )
}

export default Player
