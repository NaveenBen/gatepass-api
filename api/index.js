const server = require('./server');
const port = 1337;

server.listen(port,"localhost",()=>{
    console.log(`server is running at localhost:${port}`);
})