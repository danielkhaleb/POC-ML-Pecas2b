"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class Api {
    authenticateML(code) {
        return new Promise((resolve, reject) => {
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
                    console.log(error);
                    return console.dir(error);
                }
                return JSON.parse(body);
            });
            // meliObject.authorize(code, "http://localhost:3000/info", (err, body, res) => {
            //     console.log(`res - >${res} --------`)
            //     console.log(`body - >${body} --------`)
            //     console.log(`err - >${err} --------`)
            // }) 
            // //console.log(`token - >${meliObject.accessToken}`)
        });
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map