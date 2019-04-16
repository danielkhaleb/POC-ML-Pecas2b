"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer({
    name: 'ML-POC-api',
    version: '1.0.0'
});
server.use(restify.plugins.queryParser());
server.get('/info', [
    (req, resp, next) => {
        if (req.userAgent() && req.userAgent().includes('Mozilla/5.0')) {
            resp.status(400);
            resp.json({ message: 'errou' });
            return next(false);
        }
        return next();
    },
    (req, resp, next) => {
        //resp.status(400)
        resp.json({
            bwoser: req.userAgent(),
            method: req.method,
            query: req.query
        });
        return next(); // callback terminou  | é possivel ter um array de de callback e o next nes caso vai para o próximo callback
    }
]);
server.get('/info', (req, resp, next) => {
    //resp.status(400)
    resp.json({
        bwoser: req.userAgent(),
        method: req.method,
        query: req.query
    });
    return next(); // callback terminou  | é possivel ter um array de de callback e o next nes caso vai para o próximo callback
});
server.listen(3000, () => {
    console.log('Api is running at port 3000');
});
