"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mercadolibre_node_sdk_1 = require("mercadolibre-node-sdk");
const api_1 = require("./services/api");
class ML {
    getAccessToken() {
        let meliObject = new mercadolibre_node_sdk_1.default(8355529515288109, "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G");
        return meliObject.getAuthURL("http://localhost:3000/info");
    }
    authenticate(code) {
        const api = new api_1.Api();
        let result = api.authenticateML(code);
        console.log(result);
    }
}
exports.ML = ML;
//# sourceMappingURL=ml.js.map