import React from 'react'
import Tilt from 'react-tilt'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { usePalette } from 'react-palette'


function Queue(props) {

    const changeTrack = (n) => {
        props.setCurrentSongIndex(() => {
            return n;
        })
    }

    var items = []; 

    const { data, loading, error } = usePalette(props.songs[props.currentSongIndex].img_src);

    for(var i = 0; i<props.songs.length; i++ )  {
        if(i==props.currentSongIndex)   {
            items.push(<button onClick={() => changeTrack(i)} style={{color: data.vibrant, fontSize: '1.5rem', fontWeight: 'bolder', textShadow: '1px 1px black' }}><strong>{props.songs[i].title}</strong> by {props.songs[i].artist}<br /></button>)
        } else {
        items.push(<button onClick={() => changeTrack(i)}><strong>{props.songs[i].title}</strong> by {props.songs[i].artist}</button>)
        }
    }

    return (
        <Tilt>
            <div class="Queue">
            <h4 style={{color:'white', marginBottom: '15px'}}><center>TRACK QUEUE</center></h4>
                {items}
            </div>
        </Tilt>
    )
}

export default Queue
