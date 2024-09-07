import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

const hardCodedTracks = [
  { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
  { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
  { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' }
];

function App() {
  const [searchResults, setSearchResults] = useState([hardCodedTracks]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };



  return (
    <div>
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onNameChange={updatePlaylistName} onRemove={removeTrack} />
      </div>
    </div>
  );
}

export default App;