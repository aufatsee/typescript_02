import express, { Application, Request, Response } from "express";
import FormData from "form-data";
import urlJoin from "url-join";
import { URL } from "../const/url";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { FileUploadResponse } from "../types";
import { NodeFileObject } from "./node_file_object";
import fs from "fs";

const app: Application = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
});

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});

import { file } from "@etherdata-blockchain/etherdata-sdk";

export * as nodeFile from "../nodeFile";

const fileAPI = new NodeFile(process.env.URL!);
// const file = new NodeFileObject({ filePath: "readme.md", days: 3 });
// const id = await fileAPI.uploadFile(file);
