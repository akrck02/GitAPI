import { Request, Response } from "express";
import { FILES } from "../config/config";
import { read } from "../io/reader";

export function getRepositories(req: Request, res: Response){
    read(FILES.REPOSITORIES)
    .then((data) => res.json(data))
    .catch((error) => res.json({
        error: 404,
        message: "Not found"
    }));
}