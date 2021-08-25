const {ipcRenderer} = require('electron');

const form = document.getElementById("formulario");
const campo = document.getElementById("consulta");

form.addEventListener("submit", function (e) {
  ipcRenderer.send('canal1',campo.value)
});
ipcRenderer.on('resultado',(event,item)=>{
  const myNotification = new Notification('ALERTA!', {
    body: `${item}`
  })

});