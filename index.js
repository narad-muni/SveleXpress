const express = require('express');
const cors = require('cors');
const path = require('path');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const api = require('./src/api/api.js');

const app = express();
const port = process.env.PORT || 5000;
const liveReloadServer = livereload.createServer();

app.use(cors());
app.use(connectLivereload());
app.use('/api',api);

liveReloadServer.watch(path.join(__dirname,'pages','dist'));

liveReloadServer.server.once("connection", () => {
   setTimeout(() => {
     liveReloadServer.refresh("/");
   }, 100);
});

app.use(express.static(path.resolve(__dirname,'pages','dist')));

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname,'pages','dist', 'index.html'));
});

app.get('*',(req,res) => {
   res.redirect('/#/404');
});

app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});