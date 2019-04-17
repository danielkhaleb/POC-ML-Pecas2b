"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mercadolibre_node_sdk_1 = require("mercadolibre-node-sdk");
const request = require("request");
class ML {
    constructor() {
    }
    getAccessToken() {
        let meliObject = new mercadolibre_node_sdk_1.default(8355529515288109, "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G");
        return meliObject.getAuthURL("http://localhost:3000/info");
    }
    authenticate(code) {
        let meliObject = new mercadolibre_node_sdk_1.default(8355529515288109, "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G");
        const proxiedRequest = request.defaults({ 'proxy': "http://192.168.231.1:3128" });
        proxiedRequest.post({
            "headers": { "content-type": "application/json" },
            "url": "https://api.mercadolibre.com/oauth/token",
            "body": JSON.stringify({
                "grant_type": "authorization_code",
                "client_id": "8355529515288109",
                "client_secret": "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G",
                "code": code,
                "redirect_uri": "http://localhost:3000/info"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
        meliObject.authorize(code, "http://localhost:3000/info", (err, body, res) => {
            console.log(`res - >${res} --------`);
            console.log(`body - >${body} --------`);
            console.log(`err - >${err} --------`);
        });
        //console.log(`token - >${meliObject.accessToken}`)
    }
}
exports.ML = ML;
//# sourceMappingURL=ml.js.map