class AutoRefreshExtension {
  IsEnabled() {
    return true;
  }

  Init(ext) {
    this.app = ext.app;

    const socket = io('http://localhost:3333');

    socket.on('ready', () => {
      console.log('Server online');
    });

    socket.on('file-updated', () => this.refreshItem());
  }

  refreshItem() {
    window.updateInProgres = true;
    console.log('loading from hash');
    this.app.LoadFilesFromHash();

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      window.updateInProgres = false;
    }, 100);
  }
}
