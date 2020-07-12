import express from "express";
import config from "./config";

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("index", {
    content: "...",
  });
});

server.use(express.static("public"));

server.listen(config.port, () => {
  console.info(`Server listening on port ${config.port}`);
});
