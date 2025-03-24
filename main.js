const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    titleBarStyle: "hidden",
    ...(process.platform !== "darwin" ? { titleBarOverlay: false } : {}),
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  ipcMain.on("close-app", () => {
    app.quit();
  });
  ipcMain.on("minimize-app", (event) => {
    BrowserWindow.getFocusedWindow().minimize();
  });
  ipcMain.on("maximize-app", (event) => {
    const win = BrowserWindow.getFocusedWindow();
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
