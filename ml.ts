import Meli from 'mercadolibre-node-sdk'
import { Api } from './services/api'
import * as fs from 'fs';


export class ML {

    getAccessToken() {
        let meliObject = new
            Meli(
                8355529515288109,
                "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G");

        return meliObject.getAuthURL("http://localhost:3000/info")
    }

    authenticate(code): Promise<any> {
        return new Promise((resolve, reject) => {
            const api = new Api();
            api.authenticateML(code).then(function (result) {

                resolve(result);
            });
        });
    }

    postMockProduct(access_token) {
        return new Promise((resolve, reject) => {
            var obj = JSON.parse(fs.readFileSync('./common/product.mock.json', 'utf8'));
            const api = new Api();
            api.postProduct(obj, access_token).then(function (result) {

                resolve(result);
            });
            console.log(obj.title)
        });
    }
}