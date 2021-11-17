import { Request, Response } from "express";
import { getRepositories } from "./actions/github";
import { update } from "./actions/update";

const API = "/api/";
const API_VERSION = "v1/";
export const API_URL = API + API_VERSION;

export class Router {

    private routes : {[key:string]:any};

    constructor(){
        this.routes = {};
    }

    public declare() {
        this.routes['update'] = (req : Request, res:Response) => update(req,res);
        this.routes['repositories'] = (req : Request, res:Response) => getRepositories(req,res);
        this.routes['test'] = (req : Request, res:Response) => res.json({message: "Testing from " + req.url});
    }

    public getPaths() {
        return this.routes;
    }

    public getFunction(path:string) {        
        return this.routes[path];
    }

}
