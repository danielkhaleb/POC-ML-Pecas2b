"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const ml_1 = require("../ml");
class Server {
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'ML-POC-api',
                    version: '1.0.0'
                });
                const ml = new ml_1.ML();
                this.application.use(restify.plugins.queryParser());
                this.application.listen(3000, () => {
                    resolve(this.application);
                });
                this.application.get('/info', (req, resp, next) => {
                    if (req.query !== undefined && req.query.code !== undefined) {
                        ml.authenticate(req.query.code);
                    }
                    resp.json({
                        urlmessage: ml.getAccessToken(),
                        query: req.query
                    });
                    return next(); // callback terminou  | é possivel ter um array de de callback e o next nes caso vai para o próximo callback | passar uma mensagem de erro como parametro no next()
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootstrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map