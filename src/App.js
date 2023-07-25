import "./App.css";
import Navbar from "./components/Navbar";
import Detailsong from "./components/Detailsong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useState } from "react";

function App() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };

    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <Navbar></Navbar>
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    {/* span 2 */}
                    <Detailsong></Detailsong>
                    {/* span 2 */}
                    <ListSong></ListSong>
                </div>
                <Playing></Playing>
            </Songs.Provider>
        </div>
    );
}

export default App;
