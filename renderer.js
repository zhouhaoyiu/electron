const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'

    document.getElementById('close-button').addEventListener('click', () => {
      window.versions.closeApp()
    });
  }
  
  func()