const socket = io('http://localhost:3333');

socket.on('ready', () => {
  console.log('Server online');
});

socket.on('file-updated', () => refreshItem());

function refreshItem() {
  console.log('loading from hash');
  window.importerApp.LoadFilesFromHash();
}
