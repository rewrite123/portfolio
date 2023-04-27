import React from "react";
import Index from "../emails/index";
import { render } from "@react-email/render";
import fs from "fs";
import path from "path";

const buildEmails = async () => {
  const emailsDir = fs.readdirSync(path.join(__dirname, "../emails"));
  const reactEmails: any[] = [];
  const rawEmails: string[] = [];
  for (let possEmail of emailsDir) {
    const possEmailPath = path.join(__dirname, "../emails", possEmail);
    if (
      fs.lstatSync(possEmailPath).isFile() &&
      path.extname(possEmailPath) == ".tsx"
    ) {
      const newImport = await import(possEmailPath);
      reactEmails.push(newImport);
      rawEmails.push(possEmail);
    }
  }
  console.log(reactEmails);
  console.log(rawEmails);
  for (let emailIndex in rawEmails) {
    const rawEmail = rawEmails[emailIndex];
    const newFile = `${rawEmail.split(".").slice(0, -1).join(".")}.html`;
    const html = render(
      React.createElement(reactEmails[emailIndex].default, null),
      {
        pretty: true,
      }
    );
    fs.writeFileSync(`./dist/${newFile}`, html);
  }
};
buildEmails();
