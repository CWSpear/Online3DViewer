const socket = io('http://localhost:3333');

socket.on('ready', () => {
  console.log('Server online');
});

socket.on('file-updated', () => refreshItem());

let timer;

function refreshItem() {
  window.updateInProgres = true;
  console.log('loading from hash');
  window.importerApp.LoadFilesFromHash();

  clearTimeout(timer);

  timer = setTimeout(() => {
    window.updateInProgres = false;
  }, 100);
}
