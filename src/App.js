import React from 'react';
import {useState, useEffect} from 'react';
import Player from './components/Player';
import Tilt from 'react-tilt';
import Queue from './components/Queue'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {

  const [songs, setSongs] = useState([
    {
      title: "War Pigs",
      artist: "Black Sabbath",
      img_src: "./images/war-pigs.jpg",
      src: "./audio/war-pigs.mp3"
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      img_src: "./images/back-in-black.jpg",
      src: "./audio/back-in-black.mp3"
    },
    {
      title: "Black Dog",
      artist: "Led Zeppelin",
      img_src: "./images/black-dog.jpg",
      src: "./audio/black-dog.mp3"
    },
    {
      title: "Goodbye Yellow Brick Road",
      artist: "Elton John",
      img_src: "./images/goodbye-yellow-brick-road.jpg",
      src: "./audio/goodbye-yellow-brick-road.mp3"
    },
    {
      title: "There is a light that never goes out",
      artist: "The Smiths",
      img_src: "./images/there-is-a-light-that-never-goes-out.jpg",
      src: "./audio/there-is-a-light-that-never-goes-out.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (currentSongIndex + 1 > songs.length - 1)  {
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Queue 
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
      />
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
      />
    </div>
  );

}

export default App;
