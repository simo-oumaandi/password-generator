const ipcRenderer = require('electron').ipcRenderer;

let keyWord = document.querySelector('.keyWord').value;
let btn = document.querySelector('#btn')

let btn.onclick = () => {
    ipcRenderer.send('generatePassword', keyWord)
}

ipcRenderer.on('receivePassword', (event, data) => {
    alert(data)
})