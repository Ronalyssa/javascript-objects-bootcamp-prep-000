var playlist = {
    artistName: 'songTitle'
  };

  function updatePlaylist(playlist, artistName, songTitle) {
    playlist.philOchs = ["My Bloody Valentine"];
    return playlist
  }

  function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName;
    return playlist
  }
