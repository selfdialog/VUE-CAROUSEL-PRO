; ((doc, Socket, storage, location) => {
  const oList = doc.querySelector('#list')
  const oMsg = doc.querySelector('#message')
  const oSendBtn = doc.querySelector('#send')

  const ws = new Socket('ws:localhost:8000')
  let username = ''

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
    const msg = oMsg.value;
    if (!msg.trim().length) {
      return;
    }

    ws.send(JSON.stringify({
      user: username,
      dateTime: new Date().getTime(),
      message: msg
    }))
    oMsg.value = ''
    console.log('Send message');
  }
  function handleOpen (e) {
    console.log('websocket open', e);
    username = storage.getItem('username')
    if (!username) {
      location.href = 'entry.html';
      return;
    }
  }
  function handleClose (e) {
    console.log('websocket close', e);
  }
  function handleError (e) {
    console.log('websocket error', e);
  }
  function handleMessage (e) {
    console.log('websocket message', e);
    const msgData = JSON.parse(e.data);
    oList.appendChild(createMsg(msgData))
  }

  function createMsg (data) {
    const { user, message, dateTime } = data;
    const item = doc.createElement('li')
    item.innerHTML = `
      <p>
        <span>${user}</span>
        <i>${new Date(dateTime)}</i>
      </p>
      <p>
        <span>消息:${message}</span>
      </p>
    `;
    return item;
  }
  init()

})(document, WebSocket, localStorage, location)