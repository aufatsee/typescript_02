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
import FormData from "form-data";

export * as nodeFile from "../nodeFile";

const fileAPI = new NodeFile(process.env.URL!);
// const file = new NodeFileObject({ filePath: "readme.md", days: 3 });
// const id = await fileAPI.uploadFile(file);
