import { FILES } from "../config/config";
const fs = require("fs");

/**
 * Reads a file
 * @param url 
 * @returns 
 */
export async function read(url : string) {
    return new Promise((resolve,reject) => {
            fs.readFile(
                url,
                'utf8' ,
                (err : Error, data : string) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                }
            );
    });
}