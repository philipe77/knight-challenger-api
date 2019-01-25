import {Server} from './server/server'
import {knightsRouter} from './knights/knights.router'

const server = new Server();
server.bootstrap([knightsRouter]).then(server=>{
    console.log('Server is listening : ', server.application.address())
}).catch(error=>{
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
})




