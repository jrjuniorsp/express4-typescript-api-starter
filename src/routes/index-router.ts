/// <reference path="../_all.d.ts" />

import { Router, Request, Response } from "express";

const indexRouter: Router = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.json({message : "Hello Express4 Typescript API World"});
});

export { indexRouter }