import Meli  from 'mercadolibre-node-sdk'
import {Api} from './services/api'
import { access } from 'fs';

export class ML {

    getAccessToken() {
        let meliObject = new 
        Meli(
            8355529515288109,
             "YWd4nJYVypBW1S8kBVcR6aLZZAUkRl7G");

        return meliObject.getAuthURL("http://localhost:3000/info")
    }

    authenticate(code) {
        const api = new Api();
        let result = api.authenticateML(code);
        console.log(result);

    }
}