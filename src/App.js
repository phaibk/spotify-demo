// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ListSongs from "./components/ListSongs";
import DetailSong from "./components/DetailSong";
import DataSongs from "./data/songs.json";
import { Songs } from "./Context";
import Playing from "./components/Playing";
import React, { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
   const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };

  
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 gap-1
         bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span1 */}
          <DetailSong />
          {/* span2 */}
          <ListSongs />
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
