const path = require('path');
const fs = require('fs');

class Router {
    constructor() {
        this.router = {};
        this.useMiddlewares = [];
        this.staticDir = null;
    }

    addRouter(method, path, handler) {
        if (!this.router[method]) {
            this.router[method] = {};
        }
        this.router[method][path] = handler;
        console.log(`Route registered: ${method} ${path}`);
    }

    use(middleware) {
        this.useMiddlewares.push(middleware);
    }

    useStatic(directory) {
        this.staticDir = path.resolve(directory);
        this.use(async (req, res) => {
            if (this.staticDir) {
                const filePath = path.join(this.staticDir, req.url);
                if(fs.existsSync(filePath)) {
                    fs.createReadStream(filePath).pipe(res);
                }
            } 
        });
    }

    async runRouter(req, res) {
        try {
            console.log(`Handling ${req.method} ${req.url}`);

            for (const middleware of this.useMiddlewares) {
                await middleware(req,res);
            }

            const methodRoutes = this.router[req.method];
            if (methodRoutes && methodRoutes[req.url]) {
                console.log(`Route found: ${req.url}`);
                await methodRoutes[req.url](req, res);
            } else {
                console.log(`Route not found: ${req.url}`);
                this.sendResponse(res, 404, { error: "Route Not Found" });
            }
        } catch (error) {
            this.sendResponse(res, 500, { error: "Internal Server Error" });
        }
    }

    sendResponse(res, status, result) {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }

    get(path,handler){
        this.addRouter("GET",path,handler);
    }

    post(path,handler){
        this.addRouter("POST",path,handler);
    }

    put(path,handler){
        this.addRouter("PUT",path,handler);
    }

    delete(path,handler){
        this.addRouter("DELETE",path,handler);
    }
}

module.exports = { Router };
