import express from "express";
import { API_URL, Router } from "./router";

const PORT =  process.env.PORT || 3000;
const app = express();
const router = new Router();
router.declare();

/* CORS Control */
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

/* Define every route with callbacks */
const PATHS = router.getPaths();
for (const key in PATHS) {
    const callback = router.getFunction(key);
    app.get(API_URL + key,callback);
    console.log("[DECLARE][PATH] " + API_URL + key);   
}

app.listen(PORT, function() {
    console.log('[API] Listening on port ' + PORT + '!');
});