playlist = {name: 'songTitle'}
function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign( {}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist (aplaylist, nartistName) {

   delete aplaylist.nartistName
   return aplaylist
}
