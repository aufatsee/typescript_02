import express, { Application, Request, Response } from "express";

const app: Application = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
});

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});

import { file } from "@etherdata-blockchain/etherdata-sdk";
export * from "./node_file";
export * from "./node_file_object";

const { NodeFile, NodeFileObject } = file
