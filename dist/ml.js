"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mercadolibre_node_sdk_1 = require("mercadolibre-node-sdk");
const api_1 = require("./services/api");
const fs = require("fs");
class ML {
    getAccessToken() {
        let meliObject = new mercadolibre_node_sdk_1.default(8355529515288109, "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G");
        return meliObject.getAuthURL("http://localhost:3000/info");
    }
    authenticate(code) {
        return new Promise((resolve, reject) => {
            const api = new api_1.Api();
            api.authenticateML(code).then(function (result) {
                resolve(result);
            });
        });
    }
    postMockProduct(access_token) {
        return new Promise((resolve, reject) => {
            var obj = JSON.parse(fs.readFileSync('./common/product.mock.json', 'utf8'));
            const api = new api_1.Api();
            api.postProduct(obj, access_token).then(function (result) {
                resolve(result);
            });
            console.log(obj.title);
        });
    }
}
exports.ML = ML;
//# sourceMappingURL=ml.js.map