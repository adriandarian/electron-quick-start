var $ = global.jquery = require('jquery');
var {ipcRenderer} = require('electron');


// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
$("#sendMessageToMainBtn").click(function() {
  sendMessageToMainBtn();
});

function sendMessageToMainBtn() {
  console.log('renderer_sendMessageToMain');
  const message = $("#sendBox").val();

  console.log('sending...');
  console.log(message);

  ipcRenderer.send('key_on_message', {
    message: message,
    comingFrom: 'sendMessageToMainBtn',
  });

  new Notification('Title', {
    body: 'Here I am'
  });
}

ipcRenderer.on('info', (event, arg) => {
  console.log('renderer_ipcRenderer');
  console.log(arg);
})
