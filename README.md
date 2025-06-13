# Home Task
This task has a time limit of 30 minutes. Please record your screen and your voiceover, and attach the solution files (GitHub repo is fine) along with the screen recording.

Create a React component called Counter. The component should show a counter value and a button. Each click on the button should increase the counter by one.

Create a Node.js server that listens to connections on WebSocket. Send a message to all connected clients once a second. The message should ask the clients for their current counter value.

On the Counter component, listen to these messages and send back the current counter value.

On the backend, print the responses.

Write down the weaknesses of your design and what you would improve if you had more time.


weaknesses:
- BE: implement security like auth, client validations
- BE: unit test
- BE: implementing typescript nest
- BE: swagger documentations
- BE: split responsabilities (services, websockets, connections)

- FE: unit test
- FE: e2e test
- FE: schema validations
- FE: implementing security
- FE: analyzing performance, code splitting, profilling components, dynmic imports

writing code documentations 

## Install And running FE
in frontEnd side:
```bash
cd clients && npm install
```
after installing client:
```bash
npm start
```

## Install and running BE
in frontEnd side:
```bash
cd server && npm install
```
after installing client:
```bash
node index.js
```