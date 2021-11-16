import { Request, Response } from "express";
import { CONFIG, FILES } from "../config/config.js";
import { getUserRepositories } from "../github/repositories.js";

const fs = require("fs");

export async function update(req: Request, res: Response) {
    await updateRepositories(req, res).then(() =>{
        res.json({
            status: 200,
            Message: "Github data updated",
        });

        console.log("[Update] Done.");
    }).catch((err) =>{
        console.log(err);
        res.send(
            "An error occurred while updating repositories"
        );
    });

    
}

/**
 * Update reposirtories file from Github
 */
async function updateRepositories(req: Request, res: Response) {
    return new Promise((resolve,reject) => {
        getUserRepositories(CONFIG.USERNAME).then((repositories) => {
            fs.writeFile(
                FILES.REPOSITORIES,
                JSON.stringify(repositories.data),
                (err: Error) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                }
            );

            resolve(true);
        });
    });
}
