const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'

    document.getElementById('close-button').addEventListener('click', () => {
      window.versions.closeApp()
    });
    document.getElementById('minimize-button').addEventListener('click', () => {
      window.versions.minimizeApp()
    });
    document.getElementById('maximize-button').addEventListener('click', () => {
      window.versions.maximizeApp()
    });
  }
  
  func()