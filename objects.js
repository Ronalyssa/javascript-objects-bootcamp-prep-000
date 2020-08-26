var playlist = {
    artistNames: 'songs titles'
  };

  function updatePlaylist(object, key, value) {
    playlist.artistNames2 = ["song titles2"];
    return playlist
  }

  function removeFromPlaylist(object, key) {
    delete playlist.artistNames;
    return playlist
  }
