; ((doc, Socket) => {
  const oList = doc.querySelector('#list')
  const oMsg = doc.querySelector('#message')
  const oSendBtn = doc.querySelector('#send')

  const ws = new Socket('ws:localhost:8000')


  const init = () => {
    bindEvent()
  }

  function bindEvent () {
    oSendBtn.addEventListener('click', handleSendBtnClick, false)
    ws.addEventListener('open', handleOpen, false)
    ws.addEventListener('close', handleClose, false)
    ws.addEventListener('error', handleError, false)
    ws.addEventListener('message', handleMessage, false)
  }

  function handleSendBtnClick () {
    console.log('Send message');
  }
  function handleOpen (e) {
    console.log('websocket open', e);
  }
  function handleClose (e) {
    console.log('websocket close', e);
  }
  function handleError (e) {
    console.log('websocket error', e);
  }
  function handleMessage (e) {
    console.log('websocket message', e);
  }

  init()

})(document, WebSocket)