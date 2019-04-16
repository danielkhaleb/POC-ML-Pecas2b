import * as restify from 'restify';

export class Server {

    application: restify.Server

    initRoutes(): Promise<any>{
        return new Promise((resolve, reject) => {
            try{
                this.application = restify.createServer({
                    name: 'ML-POC-api',
                    version: '1.0.0'
                })
                
                this.application.use(restify.plugins.queryParser())

                this.application.listen(3000, ()=>{
                    resolve(this.application);
                 });
                 
                 this.application.get('/info', 
                    (req, resp, next) => {
                   //resp.status(400)
                    resp.json({
                     bwoser: req.userAgent(),
                     method: req.method,
                     query: req.query
                    })
                   return next() // callback terminou  | é possivel ter um array de de callback e o next nes caso vai para o próximo callback | passar uma mensagem de erro como parametro no next()
                })
                
                // this.application.get('/info', (req, resp, next) => {
                //     //resp.status(400)
                //      resp.json({
                //       bwoser: req.userAgent(),
                //       method: req.method,
                //       query: req.query
                //      })
                //     return next() // callback terminou  | é possivel ter um array de de callback e o next nes caso vai para o próximo callback
                //  },

            }catch(error){
                reject(error);
            }
        });
    }

    bootstrap(): Promise<Server>{
        return this.initRoutes().then(()=> this)
    }
}