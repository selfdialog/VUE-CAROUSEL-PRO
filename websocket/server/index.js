const Ws = require('ws');

; ((Ws) => {
  // ws:localhost:8000
  const server = new Ws.Server({ port: 8000 })

  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    server.on('open', handleOpen)
    server.on('close', handleClose)
    server.on('error', handleError)
    server.on('connection', handleConnection)
  }

  function handleOpen () {
    console.log('websocket open');
  }
  function handleClose () {
    console.log('websocket close');
  }
  function handleError () {
    console.log('websocket error');
  }
  function handleConnection (ws) {
    console.log('websocket connected');
    ws.on('message', handleMessage)
  }

  function handleMessage (msg) {
    console.log(msg);
  }

  init()

})(Ws)