import { Request, Response } from "express";
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
        this.routes['update'] = (req : Request, res:Response) => {update(req,res)};
        this.routes['repos'] = (req : Request, res:Response) => {res.send("Repositories here!")};
    }

    public getPaths() {
        return this.routes;
    }

    public getFunction(path:string) {        
        return this.routes[path];
    }

}
