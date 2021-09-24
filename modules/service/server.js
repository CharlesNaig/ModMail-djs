const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Hatry4 is hosting this bot!`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Hatry4 is hosting the server UwU" + Date.now()) });
}
 
module.exports = keepAlive;