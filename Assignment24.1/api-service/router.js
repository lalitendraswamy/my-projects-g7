const path = require('path');
const fs = require('fs');

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
};

class Router {
    constructor() {
        //this.router = {};
        this.req = null;
        this.res = null;
        //this.staticDir = null;
        this.routes = [];
        this.current = 0;
    }

    addRouter(method, path, handler) {
        // if (!this.router[method]) {
        //     this.router[method] = {};
        // }
        // this.router[method][path] = handler;
        let route = [method, path, handler];
        this.routes.push(route);
        console.log(`Route registered: ${method} ${path}`);
    }

    use(pathOrMiddleware, middleware) {
        let path;
        if (typeof pathOrMiddleware === 'function') {
            path = '/';
            middleware = pathOrMiddleware;
        } else {
            path = pathOrMiddleware;
        }
        this.addRouter('use', path, middleware);
    }

    useStatic(directory) {
        let staticDir = path.join(__dirname, directory);
        console.log(`Static directory set to: ${staticDir}`);
        return (async (req, res, next) => {
            try {
                    const filePath = path.join(staticDir, req.url);
                    console.log(`Serving static file: ${filePath}`);
                        if (!fs.existsSync(filePath)) {
                            next();
                        } else {
                            fs.readFile(filePath, (err, data) => {
                                if (err) {
                                    console.error(err);
                                    this.sendResponse(res, 500, { error: "Internal Server Error" });
                                } else {
                                    const ext = path.extname(filePath);
                                    const contentType = mimeTypes[ext] || 'application/octet-stream';
                                    res.setHeader('Content-Type', contentType);
                                    res.end(data);
                                }
                            });
                        }
                 
            } catch (error) {
                console.error(error);
                this.sendResponse(res, 500, { error: "Internal Server Error" });
            }
        })
    }


    async next() {

        if (this.current < this.routes.length) {
            let findIndex = this.routes.findIndex(item => item[1] === this.req.url);
            console.log(findIndex);
            if (findIndex < this.routes.length && findIndex > -1) {
                const route = this.routes[findIndex];
                if (!this.res.writableEnded) {
                    await route[2](this.req, this.res, this.next.bind(this));
                }
            }
        }
    }


    async runRoutes(req, res) {
        this.req = req;
        this.res = res;
        this.current = 0; // Reset current index

        let methodValidation = this.routes.some(item => item[0] === req.method);
        let pathValidation = this.routes.some(item => item[1] === req.url);
        // console.log('methodValidation', methodValidation);
        // console.log('pathValidation', pathValidation);

        try {
            if (methodValidation) {
                while (this.current < this.routes.length) {
                    const route = this.routes[this.current++];
                    let cond = (req.url === route[1]);
                    if (route[0] === 'use') {
                        cond = req.url.startsWith(route[1]);
                        //console.log('use condition', cond);
                    }
                    if (cond) {
                        await route[2](req, res, this.next.bind(this));
                        if (res.writableEnded) return; // Stop if the response is already sent
                    }
                }
            } else {
                this.sendResponse(res, 404, { error: "Route Not Found" });
            }
        } catch (error) {
            console.error(error);
            this.sendResponse(res, 500, { error: "Internal Server Error" });
        }
    }


    sendResponse(res, status, result) {
        if (!res.writableEnded) {
            res.writeHead(status, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        }
    }

    get(path, handler) {
        this.addRouter("GET", path, handler);
    }

    post(path, handler) {
        this.addRouter("POST", path, handler);
    }

    put(path, handler) {
        this.addRouter("PUT", path, handler);
    }

    delete(path, handler) {
        this.addRouter("DELETE", path, handler);
    }
}

module.exports = { Router };
