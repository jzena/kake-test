const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3001 })
console.log('websocket running in port 3001')

wss.on('connection', (ws) => {

  const wsInterval = setInterval(() => {
    ws.send(JSON.stringify({ type: 'request-counter' }))
  }, 1000);

  ws.on('message', (message) => {
    console.log(`counter received ${ message }`)
  })

  ws.on('close', () => {
    clearInterval(wsInterval)
    console.log('websocket disconnected')
  })

})