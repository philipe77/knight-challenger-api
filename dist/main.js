"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const knights_router_1 = require("./knights/knights.router");
const server = new server_1.Server();
server.bootstrap([knights_router_1.knightsRouter]).then(server => {
    console.log('Server is listening : ', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
