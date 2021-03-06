/// <reference path="_all.d.ts" />

import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import * as logger from "morgan";
import { json, urlencoded } from "body-parser";

import { indexRouter } from "./routes/index-router";

const app: express.Application = express();
app.disable("x-powered-by");

app.use(favicon(join(__dirname, "./public", "favicon.ico")));
app.use(express.static(join(__dirname, "../public")));

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/", indexRouter);

// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(join(__dirname, "../node_modules")));

    app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }